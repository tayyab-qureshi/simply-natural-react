import React from 'react';
import './App.css';
import Header from './components/Header';
import SectionCollection from './components/SectionCollection';
import FeaturedPlants from './components/FeaturedPlants';
import AskforHelp from './components/AskforHelp';
import Testimonials from './components/Testimonials'
import Banner from './Banner';
import Footer from './components/Footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <SectionCollection />
        <FeaturedPlants />
        <AskforHelp />
        <Testimonials />
        <Banner />
        <Footer />
      </div>
    )
  }
}
export default App;
