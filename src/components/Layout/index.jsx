import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>DLC | Staking</title>
      </Head>
      <div className={styles.Layout}>
        <Navbar />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
