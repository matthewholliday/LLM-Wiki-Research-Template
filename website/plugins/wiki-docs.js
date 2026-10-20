const docs = require('@docusaurus/plugin-content-docs');

// Docusaurus watches **/_category_.{json,yml,yaml} below its content root.
// Our content root is the repository, so narrow that watch to the included
// content folders instead of traversing dependencies and generated files.
async function wikiDocs(context, options) {
  const plugin = await docs.default(context, options);
  const categoryPattern = '_category_.{json,yml,yaml}';
  const recursiveCategorySuffix = `/**/${categoryPattern}`;
  const contentFolders = new Set(
    options.include.map((pattern) => {
      const segments = pattern.split('/');
      const folders = [];
      for (const segment of segments.slice(0, -1)) {
        if (/[*?{\[]/.test(segment)) break;
        folders.push(segment);
      }
      return folders.join('/');
    }).filter(Boolean),
  );

  return {
    ...plugin,
    getPathsToWatch() {
      return plugin.getPathsToWatch().flatMap((watchPath) => {
        if (!watchPath.endsWith(recursiveCategorySuffix)) return [watchPath];
        const root = watchPath.slice(0, -recursiveCategorySuffix.length);
        return [
          `${root}/${categoryPattern}`,
          ...Array.from(contentFolders, (folder) => `${root}/${folder}/**/${categoryPattern}`),
        ];
      });
    },
  };
}

module.exports = wikiDocs;
module.exports.validateOptions = docs.validateOptions;
