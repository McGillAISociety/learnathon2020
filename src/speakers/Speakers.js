import React, {Component} from 'react';
import Rolnick from './David Rolnick.jpg';
import Hamilton from './William Hamilton.jpg'
import Charlie from './charlie.jpg';
import {motion} from 'framer-motion';

import Title from '../Title.js';

class Speakers extends Component {
  render(){
    return (

      <section id="speakers">

          <div className="content">
            <Title titleColor="#8becff"> Speakers </Title>
              <div class="gallery js-flickity">
                <div class="gallery-cell">
                <motion.div
                  initial={{scale: 0.9}}
                  whileHover={{scale: 1}}
                  className="speaker-animate"
                >
                  <img className=" speaker-pic" src= {Rolnick} alt = "Rolnick" />
                  </motion.div>
                  <p className="position-title"> ML &amp; Climate Change </p>
                </div>
                <div class="gallery-cell">
                  <img className=" speaker-pic" src= {Charlie} alt = "Charlie" />
                  <p className="position-title">Physicist &amp; Lead AI / Data Scientist </p>
                </div>
                <div class="gallery-cell">
                  <img className=" speaker-pic" src= {Hamilton} alt = "Hamilton" />
                  <p className="position-title">Graph Representation &amp; Graph Neural Networks </p>
                </div>
              </div>


          </div>

      </section>
    );
  }

}

export default Speakers;
