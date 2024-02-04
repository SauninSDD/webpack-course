import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildLoaders(options) {
    var isDev = options.mode === 'development';
    var cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
        },
    };
    var assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };
    var swgLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true,
                            }
                        }
                    ]
                }
            }
        ],
    };
    var scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoaderWithModules,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };
    /*    const tsLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        };*/
    var tsLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ]
    };
    return [
        assetLoader,
        scssLoader,
        tsLoader,
        swgLoader
    ];
}
