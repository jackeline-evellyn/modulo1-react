const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    // __dirname retornará o  diretório atual do arquivo que esta sendo editado
    //a cada virgula passada é como se fosse uma barra

    //output é onde ficará o arquivo transpilado
    output:{
        path: path.resolve(__dirname, 'public'),
        //nome do arquivo que quer gerar
        filename: 'bundle.js'
    },
    devServer: {
        //a pasta que o dev-service precisa ficar monitorando
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
          }  
        ]
    },
};