import React, {Component} from 'react';
import Rolnick from './David Rolnick.jpg';
import Hamilton from './William Hamilton.jpg'
import Charlie from './charlie.jpg';
import Moon from './AJung Moon.jpg';
import Mayoral from './Margarita Mayoral Villa.jpg';
import {motion} from 'framer-motion';
import monster from './char2-large.png';
import MakFill from './mak-fillin.png';
import Mak from './Sandi Mak.jpg';
import Castro from './PabloCastroSquare.png';
import Tsiolis from './KC Tsiolis.jpg';

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
                  <p className="speaker-name">Prof. AJung Moon</p></a>
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
                  <p className="speaker-name">Prof. David Rolnick</p></a>
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
                  <a className="speaker-links" href="http://kctsiolis.github.io/"
                    target="_blank" rel="noreferrer">
                  <img className=" speaker-pic" src= {Tsiolis} alt = "KC Tsiolis" />
                  <p className="speaker-name">KC Tsiolis</p></a>
                  </motion.div>
                  <p className="position-title"> NLP</p>
                  <p className="speaker-description">KC Tsiolis is a third-year Honours Mathematics and Computer
                  Science student at McGill University. He conducted research
                  at <a href="https://mila.quebec/" target="_blank" rel="noreferrer">Mila</a> and the
                  McGill Reasoning and Learning Lab under the supervision of Jackie Cheung.
                  His research interests include (but are not limited to) distributional semantics and word embeddings, computational
                  pragmatics, commonsense reasoning, and the mathematics of machine learning.
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
                  <img className=" speaker-pic" src= {Mak} alt = "Sandi Mak Filler" />
                  <p className="speaker-name">Sandi Mak</p></a>
                  </motion.div>
                  <p className="position-title"> Maths in AI</p>
                  <p className="speaker-description">
                    Sandi Mak is a teacher and former
                    department coordinator in the Maths Department at Montreal's Vanier College.
                    She previously organized and taught a machine learning seminar, accessible to Cegep students,
                    and is currently involved in a project at PIA (Pôle Montréalais d’enseignement supérieur en intelligence artificielle)
                    which aims to use AI to match the skills sought by AI industry employers with post-secondary courses and programs.


                  </p>

                </div>

                <div class="gallery-cell">
                <motion.div
                  initial={{scale: 1}}
                  whileHover={{scale: 1.05}}
                  className="speaker-animate"
                >
                  <a className="speaker-links" href="https://www.linkedin.com/in/pablo-samuel-castro-2113641b/?originalSubdomain=ca"
                    target="_blank" rel="noreferrer">
                  <img className=" speaker-pic" src= {Castro} alt = "Pablo Castro" />
                  <p className="speaker-name">Pablo Samuel Castro</p></a>
                  </motion.div>
                  <p className="position-title">Google Brain</p>
                  <p className="speaker-description">
                    Pablo S. Castro moved from Quito, Ecuador to Montreal to study at
                    McGill University, where he obtained his Bachelor's, Master's, and then his PhD
                    on Reinforcement Learning. He is currently working at Google Brain as a Software
                    Developer while focusing on fundamental Reinforcement Learning research. Besides
                    being a great researcher, Pablo is also a great musician! He never misses an
                    opportunity to put music and his research together.


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
                  <p className="speaker-name">Prof. William L. Hamilton</p></a>
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
