import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    return ([
        {
            test: /\.(png|jpe?g|gif|woff|woff2)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        },
        {
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            localIdentName: isDev
                            ? "[path][name]__[local]"
                            : "[hash:base64:8]",
                            auto: (resPath: string) => resPath.includes(".module.")
                        },
                    }
                },
                "sass-loader",
            ],
        }
    ])
}