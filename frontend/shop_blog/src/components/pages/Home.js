import React, { lazy, Suspense } from 'react';
import '../../App.css';
// import Cards from '../Cards';
// import Banner from '../Banner';
// import Footer from '../Footer';


//import with loading
const Cards = lazy (() => import('../Cards'));
const Banner = lazy(() => import('../Banner'));
const Footer = lazy(() => import('../Footer'));

function Home() {
  return (
    <>
      <Suspense fallback={<img style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, margin: "auto"}} src="https://www.eurobitume.eu/fileadmin/generic/pits_downloadcenter/Resources/Public/images/loading.gif" alt="loading banner..."/>}>
      <Banner />
      </Suspense>
      <Suspense fallback={<img style={{heigth: 300, position: "absolute", top: 1000, bottom: 0, left: 0, right: 0, margin: "auto"}} src="https://www.eurobitume.eu/fileadmin/generic/pits_downloadcenter/Resources/Public/images/loading.gif" alt="loading posts..."/> }>
        <Cards />
      </Suspense>
      <Suspense fallback={<img style={{position: "absolute", top: 1500, bottom: 0, left: 0, right: 0, margin: "auto"}} src="https://www.eurobitume.eu/fileadmin/generic/pits_downloadcenter/Resources/Public/images/loading.gif" alt="loading footer..."/> }>
      <Footer />
      </Suspense>

    </>
  );
}

export default Home;
