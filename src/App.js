import './App.css';
import React, {Component} from 'react';
import Footer from './footer/Footer';
import Landing2 from './landing/Landing2';
import About from './about/About';
import Speakers from './speakers/Speakers';
import Schedule2 from './schedule/Schedule2';
import Sponsors from './sponsors/Sponsors';
import FAQ from './faq/FAQ';
import Fair from './fair/Fair';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Landing2/>
        <About/>
        <Speakers/>
      {/*//  <Fair/> */}
        <Schedule2/>

        <FAQ/>
        <Sponsors/>
        <Footer/>
      </div>
    );

  }
}
export default App;
