const path = require('path');

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'googleusercontent.com' },
      { hostname: 'oaidalleapiprodscus.blob.core.windows.net' },
      { hostname: 'cdn.openai.com' },
    ],
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.entry = async () => {
  //       const entries = await config.entry();

  //       if (!entries['feedbackWidget']) {
  //         entries['feedbackWidget'] = path.resolve(__dirname, 'components/injectors/FeedbackPortal.tsx');
  //       }

  //       return entries;
  //     };

  //     config.output = {
  //       ...config.output,
  //       filename: '[name].js',
  //       path: path.resolve(__dirname, 'public'),
  //       library: 'MyReactApp',
  //       libraryTarget: 'umd',
  //       umdNamedDefine: true,
  //     };
  //   }

  //   return config;
  // },
};

module.exports = nextConfig;
