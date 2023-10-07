/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
// // next.config.js
// const withCSS = require('@zeit/next-css')
// const withTM = require('next-transpile-modules')(['@material-ui/core'])

// module.exports = withCSS(
//   withTM({
//     /* other Next.js configuration options */
//     cssModules: true,
//     cssLoaderOptions: {
//       importLoaders: 1,
//       localIdentName: '[local]__[hash:base64:5]',
//     },
//   })
// )
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]', // You can customize the output filename here
          publicPath: '/_next/static/', // Specify the public path for the output file
          outputPath: 'static/', // Specify the output directory
        },
      },
    });

    return config;
  },
};