import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head></Head>
      <main className={styles.main}></main>
      <Link href='/quizes'>
        <a>New quiz</a>
      </Link>
      <footer className={styles.footer}></footer>
    </div>
  );
}
