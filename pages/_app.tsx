import "../styles/globals.css";

import type { AppProps } from 'next/app'
import { ConvexReactClient } from 'convex/react'
import { ConvexProviderWithAuth0 } from "convex/react-auth0";
import convexConfig from "../convex.json";

import Layout from '../components/Layout';
import LoginPage from './_login';
import styles from "../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string)
const authInfo = convexConfig.authInfo[0];

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConvexProviderWithAuth0
      client={convex}
      authInfo={authInfo}
      loading={<Loading />}
      loggedOut={<LoginPage />}
    >
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ConvexProviderWithAuth0>
  )
}

function Loading() {
  return (
    <div className={styles.loadingLayout}>
      <div className={styles.loading} />
    </div>
  );
}