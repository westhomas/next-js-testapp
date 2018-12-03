export default {
    noindex: true,
    title: `Test App ${process.env.NODE_ENV}`,
    description: "",
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://testing123/',
        title: "Test App",
        description: "",
        defaultImageWidth: 1200,
        defaultImageHeight: 1200,
        // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next (see note top of README.md)
        images: [
            {
                url: 'https://www.example.ie/og-image-01.jpg',
                width: 800,
                height: 600,
                alt: 'nope',
            }
        ],
        site_name: 'SiteName',
    },
    twitter: {
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
    },
}