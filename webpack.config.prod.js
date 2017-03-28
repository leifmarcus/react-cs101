const webpack = require( 'webpack' );
const path    = require( 'path' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const BUILD_DIR = path.resolve( __dirname, 'prod' );
const APP_DIR   = path.resolve( __dirname, 'app' );

const extractCSS = new ExtractTextPlugin( 'css/app.css' );

const config = {
    entry :
    [
        path.resolve( APP_DIR, 'Main.jsx' ),
    ],
    output :
    {
        path     : BUILD_DIR,
        filename : 'js/app.min.js',
    },
    module :
    {
        loaders :
        [
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
                test   : /\.json$/,
                loader : 'json',
            },
            {
                test    : /\.scss$/i,
                include : APP_DIR,
                loader  : extractCSS.extract( [ 'css', 'sass' ] ),
            },

        ],
    },
    plugins :
    [
        extractCSS,

        new webpack.DefinePlugin(
            {
                'process.env' : {
                    'NODE_ENV' : JSON.stringify( 'production' ),
                },
            }
        ),

        // Uglify options used when webpack is run with `-p` flag.
        new webpack.optimize.UglifyJsPlugin(
            {
                mangle   : true,
                compress :
                {
                    warnings     : true,
                    sequences    : true,
                    dead_code    : true, // eslint-disable-line
                    conditionals : true,
                    booleans     : true,
                    unused       : true,
                    if_return    : true, // eslint-disable-line
                    join_vars    : true, // eslint-disable-line
                    drop_console : true // eslint-disable-line
                },
            }
        ),
    ],
};

module.exports = config;
