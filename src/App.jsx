import { useState } from 'react';
import Header from './Header.jsx';
import Section from './Section.jsx';
import SectionReversed from './Section_reversed.jsx';
import SectionPh from './Section_ph.jsx';
import Faq from './Faq.jsx';
import Footer from './Footer.jsx';
import TvP from '/device-pile-in.png';
import Tv from '/tv.png';
import kids from '/kids.png';
import ph from '/strangerthings.png';
import loader from '/download-icon.gif';
import phImg from '/boxshot.png';
import './App.css';

function App() {

  return (
    <>
      <Header />

      <Section title='Enjoy on your TV' content='Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.' eimg={Tv} iimg='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v' isTv={true} />

      <SectionPh title='Download your shows to watch offline' content='Save your favourites easily and always have something to watch.' eimg={ph} phImg={phImg} phTitle='Stranger Things' phContent='Downloading...' loader={loader} />

      <Section title='Watch everywhere' content='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.' eimg={TvP} iimg='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v' isTv={false} />
      
      <SectionReversed title='Create profiles for kids' content='Send children on adventures with their favourite characters in a space made just for them—free with your membership.' eimg={kids} />

      {/* <Faq/> */}

      {/* <Footer/> */}

    </>
  );
}

export default App