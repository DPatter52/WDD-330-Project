module.exports = {
  'plugins': [
    // ['@snowpack/plugin-sass' ],
  ],
  'mount': {
    'src': "/",
  },
  'buildOptions': {
    'out': "build",
    'baseUrl': "/sleepoutside/build/",
    'clean': true,
    'htmlFragment': true,
  },
  'experiments': {
    'optimize': {
      // 'bundle': true,
      'minify': true,
      'target': "es2015",
    },
  },
};
