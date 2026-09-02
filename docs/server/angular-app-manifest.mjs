
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
    'index.csr.html': {size: 607, hash: '6263b15456248f8494707fc0df709220b9fb1b0b25f839141922ddcda22baa40', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: '018545a8733165ac7a6a55b4492674ba15793b307e720aa03656b476cd8bab28', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31676, hash: '4fa2d1efea5ff4e590a9de5dbab452bb8a85961e1a21eccd682dfd9b36e7a2d9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VBYOOSCD.css': {size: 556, hash: 'wj91ISKNGlU', text: () => import('./assets-chunks/styles-VBYOOSCD_css.mjs').then(m => m.default)}
  },
};
