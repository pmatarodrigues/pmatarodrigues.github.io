// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": preferDefault(require("/home/pedro/Projects/novoSite/pmatarodrigues/src/pages/index.js"))
}

