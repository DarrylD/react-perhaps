const { injectBabelPlugin } = require('react-app-rewired')
// const rewireCssModules = require('react-app-rewire-css-modules')

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['transform-decorators-legacy', 'stage-0'],
        config
    )

    //https://github.com/codebandits/react-app-rewire-css-modules
    // config = rewireCssModules(config, env)

    return config
}
