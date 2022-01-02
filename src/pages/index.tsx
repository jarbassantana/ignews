import { GetStaticProps } from 'next';
import Head from 'next/head';
import { stripe } from '../services/stripe'


import { SubscribeButton } from '../components/SubscribeButton';

import home from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KCaxbLvXLQhh5w9GgBe9BZd')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  };

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, // 24hours
  }
}