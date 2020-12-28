import React, {Component} from 'react';
import Rolnick from './David Rolnick.jpg';

import Title from '../Title.js';

class Speakers extends Component {
  render(){
    return (

      <section id="speakers">

          <div className="content">
            <Title titleColor="#fff"> Speakers </Title>
              <div className = "row">
                <div className = "column">
                  <img className="speaker-pic" src = {Rolnick} alt = "Prof Rolncik" />
                </div>
                <div className = "column">
                  <img className="speaker-pic" src = {Rolnick} alt = "Prof Rolncik" />
                </div>
                <div className = "column">
                  <img className="speaker-pic" src = {Rolnick} alt = "Prof Rolncik" />
                  <h2 className="speaker-name"> David Rolnick </h2>
                </div>
              </div>
          </div>
        
      </section>
    );
  }

}

export default Speakers;
