import Head from 'next/head';
import Image from 'next/image';
import styles from "../styles/Login.module.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginPage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Head>
        <title>Lasso</title>
        <meta name="description" content="Lasso Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.herowrapper}>
          <div className={styles.imagewrapper}>
          <Image
            priority
            src="/start.png"
            fill
            object-fit="cover"
            object-position="center"
            alt="hero image"
          />
          <div className={styles.herocontent}>
            <h1 className={styles.title}>
              Lasso
            </h1>
            <button className={styles.button} onClick={loginWithRedirect}>
              Log In
            </button>
          </div>
        </div>
      </main>
    </>
  );
}