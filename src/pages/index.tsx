import { GetServerSideProps } from 'next';
import Head from 'next/head';
import stripe from 'stripe';


import { SubscribeButton } from '../components/SubscribeButton';

import home from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={home.contentContainer}>
        <section className={home.hero}>
          <span><img src="/images/clap.png" alt="clap"></img>Hey, welcome</span>
          <h1>News about
            <br />the <span>React</span> world</h1>
          <p>
            Get acess to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>

    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1KCaxbLvXLQhh5w9GgBe9BZd')

  return {
    props: {
      nome: 'Jarbas'
    }
  }
}