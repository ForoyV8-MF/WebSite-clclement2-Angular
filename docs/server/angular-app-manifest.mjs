
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
    'index.csr.html': {size: 607, hash: 'eafb3d2f03c28015a13b999d62dd484e7eacfbe9add574fa0abc8e80a53f5793', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: '529d73b3c793fec7ef907e897493b19342946c39f7e47da229290d93f8c40126', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 32216, hash: '4fd512ae2bd3f630b1bdc1cf57141c669d79672a963857f66adc720de52f1910', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VBYOOSCD.css': {size: 556, hash: 'wj91ISKNGlU', text: () => import('./assets-chunks/styles-VBYOOSCD_css.mjs').then(m => m.default)}
  },
};
