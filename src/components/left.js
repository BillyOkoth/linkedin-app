import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { SelectUserEmail,SelectUserName, SelectUserPhoto } from "../features/authSlice";
export default function LeftSide(props) {

  const userName = useSelector(SelectUserName);
  const userPhoto = useSelector(SelectUserPhoto);
  return (
    <Container>
      <TopContainer>
        <ImageContainer>
          <img alt="" src={userPhoto} />
        </ImageContainer>
        <UserDetails>
          <h1> Welcome, {userName}!</h1>
          <br></br>
          <h2> Add a photo</h2>
        </UserDetails>
        <Widget>
          <WidgetText>
            <h1>Connections</h1>
            <h2>Grow your network</h2>
          </WidgetText>
          <WidgetImage>
            <img src="/images/widget-icon.svg" alt="" />
          </WidgetImage>         
        </Widget>
        <Item>
            <span>
              <img src="/images/item-icon.svg" alt="" />
              My Items
            </span>
          </Item>
      </TopContainer>
      <BottomContainer>
      <Widget>
          <WidgetText>
            <h2>Groups</h2>
            <h2>Events</h2>
            <h2>HashTags</h2>
          </WidgetText>
          <WidgetImage>
          <img src="/images/plus-icon.svg" alt="" />
          </WidgetImage>         
        </Widget>
        <Item>
            <span>
               
              Discover More...
            </span>
          </Item>

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
  /* border:1px solid red; */
  border-radius: 8px;
  /* border:2px solid rgb(0,0,0,0.09); */

  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  margin-bottom:2em ;
`;

//TOP BANNER COMPONENTS CSS.

const ImageContainer = styled.div`
  /* border:1px solid green; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/images/card-bg.svg");
  background-position: center;
  height: 49px;
  position: relative;
  border-radius: 4px 4px 0px 0px;
  /* z-index:-1; */

  img {
    width: 50px;
    height: 50px;
    border: 3px solid whitesmoke;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    margin: 30px 0px 0px 0px;
  }
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
  border-bottom: 1px solid rgb(0, 0, 0, 0.09);
  padding: 24px 0px 24px 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  h1 {
    font-size: 14px;
    color: #000000e6;
    /* letter-spacing: 1.3px; */
  }

  h2 {
    color: #0a66c2;
    font-size: 12px;
    /* letter-spacing: 1px; */
  }

  & :hover {
    text-decoration: underline;
  }
`;

const Widget = styled.div`
  /* border: 1px solid red; */
  cursor: pointer;
  display: grid;
  grid-template-columns: auto auto;
  padding: 24px 12px;
  border-bottom: 1px solid rgb(0,0,0,0.09);

`;

const WidgetImage = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  /* border:1px solid yellow; */

  
   
  img {
    width: 16px;
    height: 16px;
    /* border:1px solid yellow; */
    &:hover{
    color: red;
  }
  }


`;

const WidgetText = styled.div`
  display: flex;
  flex-direction: column;
  /* border:1px solid blue; */
  align-items: flex-start;
  justify-content: flex-start;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  color: #000000e6;;
  cursor: pointer;


  :hover{
    /* color: blue;   */
    /* opacity: 0.7; */
  }
   
  h1 {
   opacity: 0.4;
   line-height: 2;
     
  }
  h2 {

    line-height: 2;

    &:hover {
     text-decoration:underline;
     color:blue;

    }
   
  }
  
`;

const Item = styled.div `
  /* border:1px solid green; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding:  12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12px;
  font-weight: 800;
  opacity: 0.7;
  
  

  span {
    display: flex;
    align-items: center;
    justify-content: center;
   

  }

  ;
`;

const BottomContainer = styled.div`
  border: 1px solid rgb(0,0,0,0.09);
  background-color: #ffffff;
 
`;

const BottomWidgetText= styled(WidgetText) `
  
  span {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* font-w */
  }

`;
