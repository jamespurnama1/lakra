const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = {
  pwa: {
    name: 'Lakra',
    themeColor: '#80876f',
    msTileColor: '#80876f',
    appleMobileWebAppCapable: 'yes',
    assetsVersion: '',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-180x180.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png',
    },
    manifestOptions: {
      background_color: '#ffffff',
      icons: [
        {
          src: 'img/icons/android-chrome-maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'img/icons/android-chrome-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      display: 'standalone',
      start_url: '/',
    },
    workboxOptions: {
      cacheId: 'lakrasamana',
      importWorkboxFrom: 'local',
      navigateFallback: 'shell.html',
      navigateFallbackWhitelist: [/^((?!\/404).)*$/],
    },

    chainWebpack: (config) => {
      config.plugin('html').tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0].filename = process.env.WEBPACK_DEV_SERVER ? 'index.html' : 'i.html';
        return args;
      });
    },
    configureWebpack: () => {
      if (process.env.NODE_ENV !== 'production') {
        return {};
      }
      return {
        plugins: [
          new PrerenderSPAPlugin({
            indexPath: path.resolve('dist/i.html'),
            staticDir: path.resolve('dist'),
            routes: ['/', '/404', '/projects', '/kpr', '/tentang', '/kontak'],
            renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
              renderAfterDocumentEvent: 'app.rendered',
              headless: false,
              injectProperty: '__prerender',
              inject: {},
            }),
            // … other Prerender SPA Plugin options …
          }),
        ],
      };
    },
  },
};
