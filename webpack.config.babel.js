import { join } from 'path'

export default {
  devtool: 'source-map',
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'arrayChunks'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
}
