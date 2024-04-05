const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.cjs'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    externalsPresets: { node: true },
    externals: {}
};