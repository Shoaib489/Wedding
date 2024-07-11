import Navbar from '@/component/navbar'
import { useRouter } from 'next/router'
import React from 'react'
import Editorial from '../editorila';
import Photography from '../photography';
import Charges from '../charges/inde';

const Portfolio = () => {

  const router = useRouter();
  const { slug } = router.query;

  const db = () => {
    if (slug === "editorial") {
      return <Editorial />;
    } else if (slug === "photography") {
      return <Photography />;
    } else {
      return <Charges />;
    }
  }


  return (

    <div>
      {db()}
    </div>
  )
}

export default Portfolio