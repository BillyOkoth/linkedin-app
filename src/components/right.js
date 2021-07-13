import React from "react";
import styled from "styled-components";

export default function Rightside(props) {
  return (
    <Container>
      <TopContainer>
        <Feed>
         <Title>
         <h2>Add to your feed</h2>
         </Title>
         <TitleImage>
         <img src="/images/feed-icon.svg" alt="" />
         </TitleImage>
        </Feed>
        <Linkedin>
          <DivDiv>
              <Avatar></Avatar>
              <AvatarContent>
                  <span>#Linkedin</span>
                  <a>Follow</a>
              </AvatarContent>
          </DivDiv>
          <div></div>
        </Linkedin>
        <Linkedin>
          <DivDiv>
              <Avatar></Avatar>
              <AvatarContent>
                  <span>#Video</span>
                  <a>Follow</a>
              </AvatarContent>
          </DivDiv>
          <div></div>
        </Linkedin>
        <Recommendations>
        View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommendations>
      </TopContainer>
      <BottomContainer>
        <img alt="" src="/images/bannerad.jpg" />
      </BottomContainer>
    </Container>
  );
}

const Container = styled.div`
  /* border:1px solid blue;  */
  padding: 0px 24px;
  margin-top: 8em;

  @media (max-width: 576px) {
    display: none;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    display: none;
  }
`;
const TopContainer = styled.div`
  border: 1px solid rgb(0, 0, 0, 0.09);
  border-radius: 5px;
  margin-bottom: 2em;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

//TOP BANNER COMPONENTS CSS.

const Feed = styled.div  `
   /* border:1px solid red; */
   display:grid;
   grid-template-columns: 90% auto;
   margin-bottom: 1em;
   padding:0px  12px ;

 
`;

const Linkedin = styled.div `
  /* border:1px solid pink; */
  display:grid;
  grid-template-columns: auto auto;
  margin-bottom: 1em;
  padding:0px  12px ;

 
`;

const DivDiv = styled.div `
 
      display: grid;
      grid-template-columns: 30% auto;
     /* border:1px solid green */
`;

const Recommendations = styled.div `

color:#0a66c2;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 900;
display:flex;
justify-content: flex-start;
align-items: center;
padding:12px ;
cursor: pointer;

&:hover{
  text-decoration: underline;
}
`;
const BottomContainer = styled.div`
  /* border: 1px solid black; */
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  border: 2px solid rgb(0, 0, 0, 0.09);
  border-radius: 5px;
`;


const Title = styled.div `
/* border:1px solid purple; */
  padding:12px 3px ;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:16px;
  color:#000000E6;
  opacity: 0.6;
`;

const TitleImage = styled.div `
  display:flex;
  align-items: center;
  justify-content: center;
  
`;

const Avatar = styled.div `
   background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
   background-size:contain;
   background-repeat: no-repeat;
   width:48px;
   height: 48px;
   background-position:center;
  
   /* border:1px solid red; */
`;

const AvatarContent = styled.div `
/* border:1px solid red; */
display: flex;
flex-direction: column;
  /* grid-template-rows: 10% auto ; */
  margin-bottom: 4px;;
  cursor: pointer;  

  span {
      font-size: 14px;
      letter-spacing: 0.4px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color:#000000E6;
      text-align: center;
      margin-bottom: 5px;
  }

  a {
      /* margin-right:4px;; */
    background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
  }

 
`;

