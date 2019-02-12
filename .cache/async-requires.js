// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("/home/pedro/Projects/pmatarodrigues/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/home/pedro/Projects/pmatarodrigues/.cache/data.json")

