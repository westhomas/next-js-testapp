const {PHASE_PRODUCTION_SERVER} = process.env.NODE_ENV === 'development' ? {} : require('next-server/constants')

const nextConfig = {
    // Will only be available on the server side
    serverRuntimeConfig: {
    },
    // Will be available on both server and client
    publicRuntimeConfig: {
        ENV: process.env.ENV // Pass through env variables
    }
}


module.exports = (phase, {defaultConfig}) => {

    if (phase === PHASE_PRODUCTION_SERVER) {
        return nextConfig
    }
    const optimizedImages = require('next-optimized-images')
    const sass = require('@zeit/next-sass')

    return optimizedImages(sass(nextConfig))

}
