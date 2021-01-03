import React, {Component} from 'react';
import Rolnick from './David Rolnick.jpg';
import Hamilton from './William Hamilton.jpg'
import Charlie from './charlie.jpg';
import Moon from './AJung Moon.jpg';
import Mayoral from './Margarita Mayoral Villa.jpg';
import {motion} from 'framer-motion';
import monster from './char2-large.png';

import Title from '../Title.js';

class Speakers extends Component {
  render(){
    return (

      <section id="speakers">

          <div className="content">
          <div className = "background-monster">
          <img className = "background-monster" src={monster} alt="monster"/>
            <Title titleColor="#8becff"> Speakers </Title>
              </div>
              <div class="gallery js-flickity">

                <div class="gallery-cell">
                <motion.div
                  initial={{scale: 1}}
                  whileHover={{scale: 1.05}}
                  className="speaker-animate"
                >
                  <a className="speaker-links" href="https://www.ajungmoon.com/"
                    target="_blank" rel="noreferrer">
                  <img className=" speaker-pic" src= {Moon} alt = "Moon" />
                  <p className="speaker-name">AJung Moon</p></a>
                </motion.div>
                <p className="position-title"> Robots &amp; AI Ethics</p>
                  <p className="speaker-description">AJung Moon is an experimental roboticist.
                  She investigates how robots and AI systems influence the way people move, behave,
                  and make decisions in order to inform how we can design and deploy such autonomous
                  intelligent systems more responsibly. She is the director of the McGill Responsible
                  Autonomy &amp; Intelligent Systems Ethics (RAISE) lab.

                  </p>

              </div>


                <div class="gallery-cell">
                <motion.div
                  initial={{scale: 1}}
                  whileHover={{scale: 1.05}}
                  className="speaker-animate"
                >
                  <a className="speaker-links" href="http://www.davidrolnick.com/"
                    target="_blank" rel="noreferrer">
                  <img className=" speaker-pic" src= {Rolnick} alt = "Rolnick" />
                  <p className="speaker-name">David Rolnick</p></a>
                  </motion.div>
                  <p className="position-title"> ML &amp; Climate Change </p>
                  <p className="speaker-description">David Rolnick is an Assistant
                  Professor in the School of Computer Science at McGill University and
                  at <a href="https://mila.quebec/" target="_blank" rel="noreferrer">Mila</a>.
                  He also serves as co-founder and chair of Climate Change AI and scientific
                  co-director of Sustainability in the Digital Age. His research focuses on
                  deep learning theory and applying machine learning to climate change.
                  </p>

                </div>

                <div class="gallery-cell">
                <motion.div
                  initial={{scale: 1}}
                  whileHover={{scale: 1.05}}
                  className="speaker-animate"
                >
                  <a className="speaker-links" href="https://margaritamayoralvilla.wordpress.com/margarita-mayoral-villa-march-2019/"
                    target="_blank" rel="noreferrer">
                  <img className=" speaker-pic" src= {Mayoral} alt = "Margarita Mayoral Villa" />
                  <p className="speaker-name">Margarita Mayoral Villa</p></a>
                  </motion.div>
                  <p className="position-title"> ML &amp; Data Science </p>
                  <p className="speaker-description">Margarita Mayoral Villa will be giving a workshop
                  on computer vision.
                  She has a background in physics, IT, and forecasting industries, and was listed as one of
                  Montreal's 30 influential women in AI. She is passionate about predictive methods,
                  statistical and quantitative analysis, complex systems, and computational models.

                  </p>

                </div>

                <div class="gallery-cell">
                <motion.div
                  initial={{scale: 1}}
                  whileHover={{scale: 1.05}}
                  className="speaker-animate"
                >
                  <a className="speaker-links" href="https://mcgillai.com"
                    target="_blank" rel="noreferrer">
                  <img className=" speaker-pic" src= {Charlie} alt = "CHarlie Filler" />
                  <p className="speaker-name">Sandi Mak</p></a>
                  </motion.div>
                  <p className="position-title"> Maths in AI</p>
                  <p className="speaker-description">
                    Sandi Mak will be leading a session on the importance of mathematics in AI.

                  </p>

                </div>


                <div class="gallery-cell">
                <motion.div
                  initial={{scale: 1}}
                  whileHover={{scale: 1.05}}
                  className="speaker-animate"
                >
                  <a className="speaker-links" href="https://williamleif.github.io/"
                    target="_blank" rel="noreferrer">
                  <img className=" speaker-pic" src= {Hamilton} alt = "Hamilton" />
                  <p className="speaker-name">William L. Hamilton</p></a>
                  </motion.div>
                  <p className="position-title"> Graph Representation Learning</p>
                  <p className="speaker-description">
                    William Hamilton is an Assistant Professor of Computer Science at McGill and
                    a Canada CIFAR AI Chair at Mila. He develops machine learning models that can reason about
                    our complex, interconnected world. His research lies at the intersection of ml,
                    network science, and natural language processing, with a current emphasis on
                    graph representation learning and graph neural networks.
                  </p>

                </div>


                </div>

          </div>

      </section>
    );
  }

}

export default Speakers;
