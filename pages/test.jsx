import React from "react"
import { withRouter } from 'next/router'

const Test = ({router}) => (
    <>
        NODE_ENV: {process.env['NODE_ENV']}<br/>
        {router.query.test_var}: {process.env[router.query.test_var]}
    </>
)

export default withRouter(Test)