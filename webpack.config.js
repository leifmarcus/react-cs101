
const webpack           = require( 'webpack' ); // eslint-disable-line
const path              = require( 'path' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const BUILD_DIR = path.resolve( __dirname, 'build/' );
const APP_DIR   = path.resolve( __dirname, 'app/' );

const extractCSS = new ExtractTextPlugin( 'css/app.css' );

const config = {
    entry  : [ 'webpack/hot/dev-server', path.resolve( APP_DIR, 'Index.jsx' ) ],
    output : {
        path       : BUILD_DIR,
        publicPath : '',
        filename   : 'js/app.js',
    },
    resolve : {
        extensions : [ '', '.js', '.jsx' ],
    },
    module  : {
        loaders : [
            {
                test    : /\.jsx?/,
                include : APP_DIR,
                loader  : 'babel',
            },
            {
                test   : /\.gif$/,
                loader : 'file-loader?name=../img/[name].[ext]',
            },
            {
                test   : /\.jpg$/,
                loader : 'file-loader?name=../img/[name].[ext]',
            },
            {
                test    : /\.scss$/i,
                include : APP_DIR,
                loader  : extractCSS.extract( [ 'css', 'sass' ] ),
            },
            {
                test    : /\.json$/,
                loader  : 'json',
            },
        ],
    },
    plugins : [
        extractCSS,
    ],
};

module.exports = config;
