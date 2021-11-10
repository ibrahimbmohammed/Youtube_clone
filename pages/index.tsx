import type { NextPage } from 'next'
import Head from '@components/head';
import Button from '@components/button';
import ScrollBar from '@components/scroll-bar'
import Card from '@components/card'

const Home: NextPage = () => {
  return (
    <div>
      <Head />
      <ScrollBar />
      <div className="grid grid-cols-4 gap-4 p-10 gap-y-8 contFit mt-24 bg-gray-150">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Home
