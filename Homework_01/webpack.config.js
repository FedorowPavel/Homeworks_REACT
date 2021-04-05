//чтобы создавать пути к файлам
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    //конфиргурация дев сервера
    devServer: {
        //путь к папке после изменения которой
        //будет перезагружаться страница
        contentBase: './dist',
    },
    //путь с начальному файлу
    entry: './src/index.js',
    //то в какой файл будет скомпилирован весь код
    //и в какую директорию
    output: {
        //имя скомпилированного файла
        filename: 'bundle.js',
        //путь к нему
        path: path.resolve(__dirname, 'dist'),
        //очищает папку dist перед каждым билдом
        clean: true
    },

    //блок для модулей
    //файлов которые вствлвяем через импорт
    //и правила по которым мы их обрабатываем
    module: {
        rules: [
            {
                //для всех файлов с css расширением
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff|woff2|otf|eot)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }


        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Homework_01',
            template: './public/index.html'
        }),
    ]
}