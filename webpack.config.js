var config = {
   entry: './App/main.js',
	
   output: {
      path:'./Index',
      filename: 'bundle.js',
   },
	
   devServer: {
      inline: true,
      port: 8081
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
