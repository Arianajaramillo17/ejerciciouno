import Head from 'next/head'
import useSWR from 'swr';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Header from '../components/Header'

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Home() {
  const { data, error } = useSWR('/api/staticdata', fetcher);
   //Handle the error state
   if (error) return <div>Failed to load</div>;
   //Handle the loading state
   if (!data) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header/>

      
      <Footer/>
      
    </div>
  )
}
