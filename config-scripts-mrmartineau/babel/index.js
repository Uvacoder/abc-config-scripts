const presets = [
  [
    require.resolve('@babel/preset-env'),
    {
      modules: false,
      targets: '> 0.25%, not dead, IE 11',
      debug: false,
      useBuiltIns: 'usage',
      exclude: [
        'es6.object.assign',
        'es6.object.keys',
        'es6.string.includes',
        'es7.array.includes',
        'es6.array.find-index',
        'es6.promise',
        'es6.array.find',
        'es6.function.name'
      ]
    }
  ]
]

const plugins = [
  require.resolve('@babel/plugin-proposal-class-properties'),
  require.resolve('@babel/plugin-proposal-object-rest-spread'),
  require.resolve('@babel/plugin-proposal-export-default-from'),
  [
    require.resolve('@babel/plugin-transform-runtime'),
    {
      regenerator: true
    }
  ]
]

module.exports = { presets, plugins }
