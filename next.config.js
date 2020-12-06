module.exports = {
    async rewrites() {
        return [
            // Static assets to use directly from the source.
            {
                source: '/.gitbook/:path*',
                destination: 'https://raw.githubusercontent.com/madanlimbu/gitbook/master/.gitbook/:path*',
            },
            // Rewrite everything else to use `pages/index`
            {
                source: '/:path*',
                destination: '/',
            },
        ];
    },
};