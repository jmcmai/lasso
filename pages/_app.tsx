import type { AppProps } from 'next/app'
import { ConvexReactClient } from 'convex/react'
import { ConvexProviderWithAuth0 } from "convex/react-auth0";
import convexConfig from "../convex.json";
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string)
const authInfo = convexConfig.authInfo[0];

export default function CowboyPewPew({ Component, pageProps }: AppProps) {
  return (
    <ConvexProviderWithAuth0 client={convex} authInfo={authInfo}>
      <Layout>
        <Component {...pageProps} />
      </Layout>   
    </ConvexProviderWithAuth0>
  )
}
