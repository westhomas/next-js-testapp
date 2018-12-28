import "../styles/main.scss"

import React from "react"


class Testing extends React.Component {
    static async getInitialProps({req}) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        return {userAgent}
    }

    render() {
        return (
            <div>
                Hello World {this.props.userAgent}

                <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F" width="560" height="315" scrolling="no" frameBorder="0"
                        allowFullScreen="true"/>

            </div>
        )
    }
}

export default ({props}) => (
    <Testing {...props} />
)