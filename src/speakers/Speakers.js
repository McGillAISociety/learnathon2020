import React, {Component} from 'react';
import Rolnick from './David Rolnick.jpg';
import Hamilton from './William Hamilton.jpg'
import Charlie from './charlie.jpg';

import Title from '../Title.js';

class Speakers extends Component {
  render(){
    return (

      <section id="speakers">

          <div className="content">
            <Title titleColor="#8becff"> Speakers </Title>
              <div className = "row">
                <div className = "column">
                  <div className="card">
                    <img className="speaker-pic" src = {Rolnick} alt = "Prof Rolncik" />
                    <div className = "container">
                    <h2 className="speaker-name">David Rolnick</h2>
                    <p className = "position-title"> ML &amp; Climate Change </p>
                    <p> This is where we'll put stuff that they've done.</p>
                    </div>
                  </div>
                </div>

                <div className = "column">
                  <div className="card">
                    <img className="speaker-pic" src = {Charlie} alt = "Charlie" />
                    <div className = "container">
                    <h2 className="speaker-name">Margarita Mayoral Villa</h2>
                    <p className = "position-title"> Physicist &amp; Lead AI/Data Scientist</p>
                    <p> This is where we'll put stuff that they've done.</p>
                    </div>
                  </div>
                </div>

                <div className = "column">
                  <div className="card">
                    <img className="speaker-pic" src = {Hamilton} alt = "Prof Hamilton" />
                    <div className = "container">
                    <h2 className="speaker-name">William Hamilton</h2>
                    <p className = "position-title"> Graph Representation Learning &amp; Graph Neural Networks </p>
                    <p> This is where we'll put stuff that they've done.</p>
                    </div>
                  </div>
                </div>


              </div>
          </div>
        
      </section>
    );
  }

}

export default Speakers;
