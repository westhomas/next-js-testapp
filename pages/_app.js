import App, {Container} from 'next/app'
import React from 'react'
import NextSeo from 'next-seo'
import SEO from '../next-seo.config'

// import Test from '../this-file-doesnt-exist.config'

export default class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render() {
        const {Component, pageProps} = this.props
        return (
            <Container>
                {/* Here we call NextSeo and pass our default configuration to it  */}
                <NextSeo config={SEO}/>
                <Component {...pageProps} />
            </Container>
        )
    }
}