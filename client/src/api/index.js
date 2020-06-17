'use strict';
const requireModule = require.context('.', true, /\.js$/);
const api = [];

requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js') return;

  // Replace ./ and .js
  const path = fileName.replace(/(\.\/|\.js)/g, '');
  const version = path.split('/')[0];

  if (!api[version]) {
    api[version] = requireModule(fileName).default;
  }
});

if (process.env.NODE_ENV !== 'production') {
  console.log('[api] ./api/index.js:', api);
}

export default api;
