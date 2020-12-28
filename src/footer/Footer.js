import React from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import BackToTop from 'react-back-to-top-button';

const FooterContainer = styled('div')`
  display: flex;
  background-image: linear-gradient(#FFA9A8, #ffc18e);
  flex-direction: row;
  height: 200px;
  padding-top: 100px;
  width: 100%;
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
  color: white !important;
  transition: opacity 0.2s;
  text-decoration: none !important;
  :hover {
    opacity: 0.6;
  }
`;

const SocialLinks = styled('div')`
  margin: auto;
  padding-bottom: 12px;
  align-items: center;
  text-align: center;
  justify-content: center;
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
    <BackToTop speed = {1500}
      easing = "easeInOutQuint">
      <i className = "fa fa-arrow-up"></i>
    </BackToTop>
    <CenterContainer>
      <CenterContent>
        <SocialLinks>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
         <a
            aria-label="Contact Us"
            href="mailto:mcgillaicontact@gmail.com"
           class='fa fa-at'
          />
          <a
            aria-label="Website"
            href="https://www.mcgillai.com/"
            target="_blank"
            rel="noopener noreferrer"
             class='fa fa-map-marker'
          />
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
        McGill Artificial Intelligence Society <br/> &copy; {year}
      </CenterContent>
    </CenterContainer>
  </FooterContainer>
);
