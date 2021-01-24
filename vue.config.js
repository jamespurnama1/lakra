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
    // configureWebpack: () => {
    //   if (process.env.NODE_ENV !== 'production') {
    //     return {};
    //   }
    //   return {
    //     plugins: [
    //       new PrerenderSPAPlugin({
    //         staticDir: path.joing(__dirname, 'dist'),
    //         routes: ['/', '/404', '/projects', '/kpr', '/tentang', '/kontak'],
    //         renderer: new Renderer({
    //           // renderAfterDocumentEvent: 'app.rendered',
    //           product: 'firefox',
    //           renderAfterTime: 5000,
    //           headless: false,
    //           injectProperty: '__prerender',
    //           inject: {},
    //         }),
    //         // … other Prerender SPA Plugin options …
    //       }),
    //     ],
    //   };
    // },
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/404',
        '/projects',
        '/projects/lakrasamana',
        '/kpr',
        '/tentang',
        '/kontak',
      ],
      useRenderEvent: true,
      maxConcurrentRoutes: 1,
      headless: true,
      onlyProduction: true,
    },
  },
};
