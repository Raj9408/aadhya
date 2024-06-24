/** @type {import('next').NextConfig} */
// const nextConfig = {};

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const nextConfig = {
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|ico|webp|jp2|avif|tiff?)$/,
      include: path.resolve(__dirname, 'src/assets/images'),
      type: 'asset/resource',
      generator: {
        filename: 'static/images/[name].[hash][ext]',
      },
    });

    return config;
  },
};

export default nextConfig;

// export default nextConfig;
// const nextConfig = {
//     webpack: (config) => {
//         config.module.rules.push({
//             test: /\.(mp4)$/,
//             use: 'file-loader',
//         });
//         return config;
//     },
// };

// export default nextConfig;

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
