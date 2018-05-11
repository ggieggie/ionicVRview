const path = require('path');
const webpackConfig = require('./node_modules/@ionic/app-scripts/config/webpack.config');
webpackConfig.dev.entry = {
                            "main": process.env.IONIC_APP_ENTRY_POINT,
                            "bundle": './src/entry.js'
}
webpackConfig.dev.resolve.modules = [path.resolve(__dirname, "src"), "node_modules"]
