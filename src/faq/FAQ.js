import React, {Component} from 'react';
import {Accordion, AccordionItem} from 'react-light-accordion';

//import './schedule.css';
import Title from '../Title.js';

class FAQ extends Component{
  render(){
    return(
      <section id = "faq">
      <div className="faq-container">
      <div>
        <Title titleColor = "#ffa9a8">FAQ</Title>
      </div>
      <div>
      <Accordion atomic ={true}>
        <AccordionItem title = "Can I register for this conference?">
        <p> Yes! Anyone can participate. The event is open to everyone
        interested in learning more about AI. </p>
        </AccordionItem>

        <AccordionItem title = "I am new to AI. Can I still participate?">
        <p> Yup! All skill levels are welcome. More importantly, we aim to provide
        a condensed, fun, open, learning experience. </p>
        </AccordionItem>

        <AccordionItem title = "Does it cost anything to take part?">
        <p> Nope! The event is completely free of charge. </p>
        </AccordionItem>

        <AccordionItem title = "Do I have to learn something in advance?">
        <p> Some mathematical background is recommended but not necessary!
        We will be having a talk presenting the important mathematical topics used in AI.</p>
        </AccordionItem>


      </Accordion>
      </div>
      </div>

      </section>
    );
  }
}
export default FAQ;
