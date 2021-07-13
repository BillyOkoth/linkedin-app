import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  SelectUserEmail,
  SelectUserName,
  SelectUserPhoto,
} from "../features/authSlice";

export default function MainContent(props) {
  const userPhoto = useSelector(SelectUserPhoto);
  const userName = useSelector(SelectUserName);
  const userEmail = useSelector(SelectUserEmail);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;


  return (
    <Container>
      <Header>
        <HeaderImage>
          {" "}
          <img alt="" src={userPhoto} />
        </HeaderImage>
        <HeaderText>
          {userName}
          <br></br>
          {userEmail} follows<br></br>
           {today}
        </HeaderText>
        <HeaderThreeDot>
          {" "}
          <img alt="" src="/images/three.svg" />
        </HeaderThreeDot>
      </Header>
      <Content>
        <Contentext>
          This is my linked in clone. Hopefully you're excited to build it 🚀!
        </Contentext>
        <ContentImage>
          {" "}
          <img alt="" src={userPhoto} />
        </ContentImage>
      </Content>
      <Footer>
        <FooterTop>
          <div>
            <img alt="" src="/images/like.svg" />
          </div>
          <div>
            <img alt="" src="/images/clap.svg" /> 164
          </div>
          <div>
            <img alt="" src="/images/love.svg" />4 Comments
          </div>
        </FooterTop>
        {/* <Horizontal></Horizontal> */}

        <FooterBottom>
          <div>
            <img alt="" src="/images/like.svg" />
            Like
          </div>
          <div>
            <img alt="" src="/images/comment.svg" />
            Comments
          </div>
          <div>
            <img alt="" src="/images/share.svg" />
            Share
          </div>
          <div>
            <img alt="" src="/images/send.svg" />
            Send
          </div>
        </FooterBottom>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 2em;
  margin-bottom: 5em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 2px solid rgb(0, 0, 0, 0.09);
`;

const Header = styled.div`
  background-color: #ffffff;
  display: grid;
  grid-template-columns: auto 60% auto;
`;

const HeaderImage = styled.div`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    /* border: 2px solid firebrick; */
  }
`;
const HeaderText = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 900;
  font-size: 12px;
  color: #00000099;
  letter-spacing: 1px;
  line-height: 1.9;
  padding: 0px 3px; ;
`;

const HeaderThreeDot = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 4px;

  img {
    width: 19px;
    height: 19px;
    opacity: 0.5;
  }
`;
const Content = styled.div`
  /* border:1px solid  black; */
`;
const Contentext = styled.div`
  /* border:1px solid purple ; */
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  color: #000000e6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0px;
`;
const ContentImage = styled.div`
  /* border:1px solid yellow; */
  img {
    width: 100%;
    height: inherit;
  }
`;
const Footer = styled.div`
  /* border:1px solid pink; */
  display: grid;
  grid-template-rows: auto auto;
`;

const FooterTop = styled.div`
  border-bottom: 1px solid rgb(0, 0, 0, 0.09);
  display: flex;
  flex-direction: row;
  padding: 2px 0px 4px 4px;

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: auto auto auto;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto auto;
  }

  div {
    margin-right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 5px;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 14px;
    color: #000000e6;
    img {
      width: 14px;
      height: 14px;
      margin-right: 3px;
    }
    &:hover {
      text-decoration: underline;
      color: blue;
    }
  }
`;

const FooterBottom = styled.div`
  /* border:1px solid green; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 3px;
  div {
    /* width:100%; */

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 12px;
    font-weight: 800;
    opacity: 0.6;
    letter-spacing: 1px;
    color: #000000e6;
    margin-right: 12px;
    padding: 12px 6px;
    cursor: pointer;
    img {
      margin-right: 5px;
      width: 20px;
      height: 20px;
    }

    &:hover {
      background-color: #7594c2;
      border-radius: 4px;
      opacity: 0.3;
      /* padding: 0px 8px; */
    }
  }
  /* border:1px solid green; */
`;

const Horizontal = styled.div`
  border: 2px solid green;
  height: 2px;
  /* width: 20%; */
  margin: 0;
`;
