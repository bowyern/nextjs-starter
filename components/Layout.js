import Head from 'next/head'

import '../styles/index.css'

const Layout = (props) => (
    <div>
        <Head>
          <title>NextJS Starter!</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        {props.children}
    </div>
)

export default Layout
