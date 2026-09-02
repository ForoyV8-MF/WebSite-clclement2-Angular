
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://foroyv8-mf.github.io/WebSite-clclement2-Angular',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/WebSite-clclement2-Angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 607, hash: '1f6850c25b84862f4ed8137afb979a6b1cb0ce15b883e5d51c21542e0decba91', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: '5f44b0ebb1c2671c9078e1c1af8f88f96c40e36b93b5f50d452a803ea1e8f4f2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31826, hash: '1de08846361686614acc7bac8d94536ad24769d4023e120e1bc988f8917ef74e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VBYOOSCD.css': {size: 556, hash: 'wj91ISKNGlU', text: () => import('./assets-chunks/styles-VBYOOSCD_css.mjs').then(m => m.default)}
  },
};
