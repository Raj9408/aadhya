// /** @type {import('postcss-load-config').Config} */
// const config = {
//   plugins: {
//     tailwindcss: {},
//   },
// };

// export default config;


// export default {
//   plugins: [
//     'postcss-flexbugs-fixes',
//     [
//       'postcss-preset-env',
//       {
//         autoprefixer: {
//           flexbox: 'no-2009'
//         },
//         stage: 3,
//         features: {
//           'custom-properties': false
//         }
//       }
//     ]
//   ]
// };

export default {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
