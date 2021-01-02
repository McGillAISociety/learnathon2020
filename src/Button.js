import styled from '@emotion/styled';

export default styled('a')`
  font-family: 'opensans-bold', sans-serif;
  font-size: ${props=>props.fontsize};
  letter-spacing: 1.2px;

  padding: 16px 32px;
  left: -30px;
  top: -8px;
  color: ${props =>props.color};
  background-color: ${props=>props.bgcolor};
  display: inline-block;
  margin-top: 2px;
  text-weight:bold;
  text-decoration: none;
  line-height: 20px;
  font-weight: normal;
  min-width: 180px;
  text-align:center;
  border-radius: 0.2em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  :hover{
    transform: scale(1.05);
    background-color: ${props=>props.color};
    color: ${props=>props.bgcolor};
    transition: 0.2s;
  }
  :active{
    transform: scale(0.95);
  }

`;
