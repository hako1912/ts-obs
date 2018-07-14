var path = require('path');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development',

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './src/main/index.ts',
    output:
        {path: __dirname, filename: "dist/index.js"},
    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: 'ts-loader'
            }
        ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/main/')
        },
        extensions: [
            '.ts'
        ]
    }
};
