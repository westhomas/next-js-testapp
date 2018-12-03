const {PHASE_PRODUCTION_SERVER} = process.env.NODE_ENV === 'development' ? {} : require('next-server/constants')

module.exports = (phase, {defaultConfig}) => {

    if (phase === PHASE_PRODUCTION_SERVER) {
        return {
            /* production only config */
        }
    }
    const optimizedImages = require('next-optimized-images')
    const sass = require('@zeit/next-sass')

    return optimizedImages(sass({}))

}
