import React from "react";
import styled from "styled-components";
import Main from "./main"
import RightSide from "./right";
import LeftSide from "./left";
import { useSelector } from "react-redux";
import { SelectUserEmail,SelectUserName,SelectUserPhoto } from "../features/authSlice";


export default function Home(props) {

  const username = useSelector(SelectUserName);
  console.log(username);
  return (
     <Container>
       <Section>
       <LeftSide></LeftSide>
       <Main/>
       <RightSide></RightSide>
       </Section>
    
     </Container>
  );

}
const Container = styled.div `
 box-sizing: border-box;
 margin:0;

 /* border:1px solid green;  */
 /* background-color: red; */
`;


const Section = styled.section `
    /* border:1px solid red;  */
    margin:0;
 
   /* height: 100vh;
   width: 100%; */
   background-color: #f2f2f2;
   /* margin-top:10em; */
   display: grid;
   grid-template-columns: auto 48% auto;

   @media (max-width:576px){
     background-color: red;
     display: flex;
     flex-direction: column;
     margin-top: 5em;
   }

   @media (min-width:576px) and (max-width:768px){
     display: flex;
     flex-direction: column;
     margin-top: 5em;
   }
`;




