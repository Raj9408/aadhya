/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp4)$/,
            use: 'file-loader',
        });
        return config;
    },
};

export default nextConfig;

// const nextConfig = {
//     webpack: (config, { isServer }) => {
//       // Add a rule to handle .mp4 files
//       config.module.rules.push({
//         test: /\.(mp4)$/i,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 10000,
//               name: '[name].[hash].[ext]',
//               publicPath: '/_next/static/videos/',
//               outputPath: 'static/videos/'
//             },
//           },
//         ],
//       });
  
//       // Ensure to return the modified config
//       return config;
//     },
//   };
  
//   export default nextConfig;