import posthog from 'posthog-js';

export default {
  install(Vue) {
    /* eslint-disable no-param-reassign */
    Vue.prototype.$posthog = posthog.init(
      process.env.VUE_APP_POSTHOG_API,
      {
        api_host: 'https://eu.posthog.com',
      },
    );
  },
};
