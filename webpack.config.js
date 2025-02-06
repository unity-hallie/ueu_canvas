/* eslint-disable @typescript-eslint/no-require-imports,@/no-undef */
//via https://medium.com/@tharshita13/creating-a-chrome-extension-with-react-a-step-by-step-guide-47fe9bab24a1

const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const packageJson = require('./package.json');
const {TsconfigPathsPlugin} = require("tsconfig-paths-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dotenv = require('dotenv').config({path: __dirname + '/.env'})
const isDevelopment = process.env.NODE_ENV !== 'production'
const outputPath = path.resolve(__dirname, "./dist");

const entry = './src/index.ts';
const output = {
    path: outputPath,
    filename: 'index.js',
    library: {
        name: 'ueu_canvas',
        type: 'umd',
    },
    globalObject: 'this',
    clean: true,
}

const externals = {
    assert: 'commonjs assert',     // Node core module
    process: 'commonjs process',   // Node core module
    jest: 'commonjs jest',         // Testing library
    'jest-dom': 'commonjs jest-dom',
    'jest-environment-jsdom': 'commonjs jest-environment-jsdom',
    '@testing-library/jest-dom': 'commonjs @testing-library/jest-dom',
    // Uncomment if you want to exclude the polyfill
    // 'temporal-polyfill': 'commonjs temporal-polyfill',
};


const
mjsRule = {
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
};

const tsRule = {
    test: /\.tsx?$/,
    use: [{
        loader: "ts-loader",
        options: {compilerOptions: {noEmit: false},}
    }],
    exclude: /node_modules|__test__/,
};

const _module = {
    rules: [
        mjsRule,
        tsRule,
    ],
};

//
// function getHtmlPlugins(chunks) {
//     return chunks.map(
//         (chunk) =>
//             new HTMLPlugin({
//                 title: "React extension",
//                 filename: `${chunk}.html`,
//                 chunks: [chunk],
//             })
//     );
// }

const createPlugins = () => [
    new webpack.ProvidePlugin({
        process: require.resolve('process/browser'),
    }),
    // new webpack.SourceMapDevToolPlugin({
    //     exclude: /node_modules/,
    //     test: /\.(ts|js|s?[ca]ss|mjs|tsx)/,
    //     filename: '[name][ext].map'
    // }),
    new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
        const mod = resource.request.replace(/^node:/, "");
        switch (mod) {
            case "assert":
                resource.request = "assert";
                break;
        }
    }),
];


module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    performance: {
        hints: isDevelopment ? false : 'warning'
    },
    cache: {
        type: 'filesystem',
        allowCollectingMemory: true,
    },
    externals,
    entry,
    output,
    devtool: false,
    module: _module,
    plugins: createPlugins(),
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".mjs"],
        alias: {
            config: path.resolve(__dirname, process.env.NODE_ENV || 'development'),
        },
        plugins: [
            new TsconfigPathsPlugin({}),
        ],
    },
    stats: {
        errorDetails: true,
    }
    ,
}