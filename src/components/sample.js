import React from "react";
import styled from "styled-components";

export default function Sample(props) {
  return (
    <Section>
      <SignUp>
        <WelcomeDiv>
          <h1>Welcome to your professional community</h1>
        </WelcomeDiv>
        <GoogleBtn>
          <GoogleImg>
            <a href="/">
              <img src="/images/google.svg" alt="" />
            </a>
          </GoogleImg>
          <GoogleText>Sign In with Google</GoogleText>
        </GoogleBtn>
      </SignUp>
      <ImageBg>
        <img src="/images/login-hero.svg" alt="" />
      </ImageBg>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: row;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const SignUp = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const ImageBg = styled.div`
  /* background-color: green; */
  width: 60%;
  align-items: center;
  justify-content: center;
  display: flex;

  
  img {
     height:80%;    

  }
  @media (max-width: 576px) {
    width: 100%;
    height: initial;
  }
`;

const WelcomeDiv = styled.div`
  text-align: center;
  h1 {
    font-size: 56px;
    font-weight: 200 !important;
    color: #2977c9;
    line-height: 55px;

    @media (max-width: 576px) {
      font-size: 23px;
      line-height: 2;
    }
  }
`;
const GoogleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
  padding: 12px;
  color: rgba(0, 0, 0, 0.6);
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
`;
const GoogleImg = styled.div`
  padding: 0;
  a {
    img {
      width: 20px;
      height: 18px;
    }
  }
`;
const GoogleText = styled.div`
  padding: 2px;
  /* text-transform: uppercase; */
  /* font-size: 14px; */
`;
