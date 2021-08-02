const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path= require("path"); // loading the module


module.exports=(env) =>{
const value=(env === "production");
console.log(env);
const CssExtract = new ExtractTextPlugin("styles.css");
    return {
  
    entry:  "./src/app.js",
    output:{
        path: path.join(__dirname,"public"),
        filename: "bundle.js"
    },
    stats: {warnings:false},
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: CssExtract.extract({
                use:[{
                    loader:"css-loader",
                    options:{
                        sourceMap:true
                    }
                },{
                    loader:"sass-loader",
                    options:{
                        sourceMap:true
                    }
                }]
            })
        }
    ]
    },
    plugins:[CssExtract],
    devtool: value?"source-map":"inline-source-map",
    devServer: {
        contentBase: path.join(__dirname,"public"),
        compress: true,
        port: 9000,
        historyApiFallback: true,
        stats: {
            warnings:false
        }
    }
  

}
};
//devtool is used to assing source map which gives a better idea for our error
//remeber whenever changing webpack.config.js restart the npm run build even though its on a watch
// as its on a watch for changes in bundle.js and not in webpack.config.js

//use: ["style-loader","css-loader","sass-loader"]