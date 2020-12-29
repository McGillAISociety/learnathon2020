import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Footer from './footer/Footer';
import Landing from './landing/Landing';
import Landing2 from './landing/Landing2';
import About from './about/About';
import Speakers from './speakers/Speakers';
import Schedule from './schedule/Schedule';
import Sponsors from './sponsors/Sponsors';
import FAQ from './faq/FAQ';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Landing2/>
        <About/>
        <Speakers/>
        <Schedule/>
        <FAQ/>
        <Sponsors/>
        <Footer/>
      </div>
    );

  }
}
export default App;
