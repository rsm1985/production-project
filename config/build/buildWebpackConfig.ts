import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugin";
import {buildDevServer} from "./buildDevServer";
import path from "path";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;
    return ({
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            preferAbsolute: true,
            modules: [options.paths.src, "node_modules"],
            mainFiles: ["index"],
            alias: {
                // '@': path.resolve(__dirname, '..', 'src'),
                // '@/assets': path.resolve(__dirname, '..', 'src/assets'),
            }
        },
        plugins: buildPlugins(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    })
}