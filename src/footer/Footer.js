import React from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import BackToTop from 'react-back-to-top-button';
import monster from './char4.png';

const FooterContainer = styled('div')`
  display: flex;
  background-image: linear-gradient(#FFA9A8, #ffc18e);
  flex-direction: row;
  padding-top: 70px;
  width: 100%;
  padding-bottom: 20px;
`;

const CenterContainer = styled('div')`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  color: white;
  font-weight: bold;
  margin: 0 auto;
`;

const CenterContent = styled('div')`
  flex-grow: 1;
  align-self: center;
  text-align: center;
`;

const footerLink = css`
  color: #fff ;
  transition: opacity 0.2s;
  text-decoration: none !important;
  :hover {

    color:#ffc18e ;
  }
`;

const SocialLinks = styled('div')`
  margin: auto;
  padding-bottom: 12px;
  padding-top: 12px;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color:#a1a1a1;
  border-radius: 2%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  > a {
    font-size: 50px;
    margin: 0 30px;
    ${footerLink};
    @media only screen and (max-width: 640px){
      font-size: 20px !important;
    }
  }
  @media screen and (min-width: 320px){
    width: auto;
  }
`;


const year = new Date().getFullYear();

export default () => (
  <FooterContainer>
  <img className="monster-dude" src={monster} alt='monster dude'/>

  <BackToTop speed = {1500}
    easing = "easeInOutQuint">
    <i id = "up-button" className = "fa fa-arrow-circle-up" ></i>
  </BackToTop>

    <CenterContainer>

      <CenterContent>
        <p class='footer-text'>Still have questions? <br/>Send us an email
        at <a href="mailto:mcgillaicontact@gmail.com" alt="mcgill ai email">mcgillaicontact@gmail.com</a>!</p>

        <SocialLinks>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

          <a
            aria-label="Facebook"
            href="https://www.facebook.com/McGillAI/"
            target="_blank"
            rel="noopener noreferrer"
             class='fa fa-facebook'
          />
          <a
            aria-label="Twitter"
            href="https://twitter.com/mcgillaisociety"
            target="_blank"
            rel="noopener noreferrer"
             class='fa fa-twitter'
          />
          <a
            aria-label="Github"
            href="https://github.com/McGillAISociety"
            target="_blank"
            rel="noopener noreferrer"
             class='fa fa-github'
          />
          <a
            aria-label="Linkedin"
            href="https://www.linkedin.com/company/mcgill-artificial-intelligence-society/"
            target="_blank"
            rel="noopener noreferrer"
             class='fa fa-linkedin'
          />
           </SocialLinks>
          <br/>
        <a href="https://www.mcgillai.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="link-site">
        McGill Artificial Intelligence Society</a><br/> &copy; {year}
      </CenterContent>
    </CenterContainer>
  </FooterContainer>
);
