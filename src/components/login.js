import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {setSignInState,setSignOutState} from '../features/authSlice';
import { isRejected } from "@reduxjs/toolkit";
import { useDispatch,useSelector } from "react-redux";

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleAuth = ()=>{
       
    auth.signInWithPopup(provider)
        .then((result) => {          
          console.log(result.user);
          //set the store with an action setSignInState.
          dispatch(setSignInState({

            name :result.user.displayName,
            email : result.user.email,
            photo : result.user.photoURL
          }));
           history.push("/home");
        }).catch(err => alert(err.message));
       
  }
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="images/login-logo.svg" alt="" />
        </a>
        <div>
          <JoinUs>Join Us</JoinUs>
          <SignUp>Sign Up</SignUp>
        </div>
      </Nav>

      <Section>
      <SignIn>
        <WelcomeDiv>
          <h1>Welcome to your professional community</h1>
        </WelcomeDiv>
        <GoogleBtn onClick={handleAuth}>
          <GoogleImg>
            <a href="/">
              <img src="/images/google.svg" alt="" />
            </a>
          </GoogleImg>
          <GoogleText>Sign In with Google</GoogleText>
        </GoogleBtn>
      </SignIn>
      <ImageBg>
        <img src="/images/login-hero.svg" alt="" />
      </ImageBg>
    </Section>
  </Container>
  );
}

const Container = styled.div`
  padding: 0; 
`;

const Nav = styled.nav`
  padding: 12px 0 16px;
  position: sticky;
  margin: auto;
  max-width: 1128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 30px;
  }
`;

const JoinUs = styled.a`
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
  margin-right: 16px;
  color: rgb(0, 0, 0, 0.6);

  padding: 16px 12px;

  &:hover {
    background-color: rgb(0, 0, 0, 0.08);
    color: rgb(0, 0, 0, 0.7);
    text-decoration: none;
  }
  @media (max-width: 576px) {
    margin-right: 0;
    font-size: 12px;
  }
`;

const SignUp = styled.a`
  margin-right: 16px;
  text-decoration: none;
  background-color: rgb(0, 0, 0, 0);
  border-radius: 24px;
  font-size: 16px;
  padding: 10px 24px;
  box-shadow: inset 0 0 0 1px #0a66c2;
  line-height: 2px;
  color: #0a66c2;
  text-align: center;

  &:hover {
    background-color: rgb(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  /* background-color: red; */
  height: 95vh;;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const SignIn = styled.div`
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
  padding:0 0 32px 0;
  z-index:-1;
  
  img {
     height:100%;    

  }
  @media (max-width: 576px) {
    margin-top:42px;
    width: 100%;
    height: initial;
  }
  @media (min-width:567px) and (max-width:768px){
      width:50%;
      /* position: initial; */
      z-index:-1;
      
    }
`;

const WelcomeDiv = styled.div`
  text-align: center;
  h1 {
    font-size: 56px;
    font-weight: 400 !important;
    color: #2977c9;
    line-height: 55px;
     

    @media (max-width: 576px) {
      font-size: 23px;
      line-height: 2;
      font-weight: 300 !important;
    }

    @media (min-width:567px) and (max-width:768px){
      font-size: 26px;
      line-height: 32px;
      font-weight: 200 !important;
      
    }
    @media (max-width:567px) {
      margin-top: 25px;
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
export default Login;
