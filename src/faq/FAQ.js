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
        interested in learning more about AI. We strongly encourage applicants
         who identify as Indigenous, Black, Latinx, women/non-binary, queer, disabled, or
         otherwise underrepresented in tech to attend.</p>
        </AccordionItem>

        <AccordionItem title = "Is this a virtual event?">
        <p> Yes. This year, the conference will be taking place online. We look forward
        to seeing your virtual backgrounds! In terms of platforms, we will be using Discord, Zoom, and gather.town. </p>
        </AccordionItem>

        <AccordionItem title = "I am new to AI. Can I still participate?">
        <p> Yes. All skill levels are welcome. We aim to provide
        a condensed, fun, and welcoming learning experience. </p>
        </AccordionItem>

        <AccordionItem title = "Does it cost anything to take part?">
        <p> Nope. The event is completely free of charge. </p>
        </AccordionItem>

        <AccordionItem title = "Do I have to learn something in advance?">
        <p> Some mathematical background is recommended but not necessary.
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
