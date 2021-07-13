
import React from 'react'
import styled from 'styled-components';
import MainContent from './maincontent';
import { SelectUserPhoto } from "../features/authSlice";
import { useSelector } from 'react-redux';
export default function Main() {

  const userPhoto = useSelector(SelectUserPhoto);
  return (
 <Container>
   <PostCard>
     <PostInput>
       <PostInputImage>
         <img alt = "" src={userPhoto}/>
       </PostInputImage>
       <PostInputInput>
         <input type="text" placeholder="Start Post"/>
       </PostInputInput>
     </PostInput>
     <PostAction>
       <PostActionButton>
       <img alt = "" src="/images/pix.svg"/>
       Photo
       </PostActionButton>
       <PostActionButton>
       <img alt = "" src="/images/video.svg"/>
       Video
       </PostActionButton>
       <PostActionButton>
       <img alt = "" src="/images/calender.svg"/>
       Event
       </PostActionButton>
       <PostActionButton>
       <img alt = "" src="/images/calender.svg"/>
       Write Article
       </PostActionButton>
     </PostAction>
   </PostCard>
   <MainContent>Mineera</MainContent>
   <MainContent>Mineera</MainContent>

   

   
 </Container>
  )
}

const Container = styled.div `
   /* border:1px solid yellow;  */
   margin-top:8em;
   background-color: #f2f2f2;
   /* background-color: red; */
   display: flex;
   flex-direction: column;
   padding:0px 5px;
   height: auto;
  
   @media (max-width:768px){
     margin-top:-2em;
   }
  
  `;
const PostCard = styled.div `
   border:2px solid rgb(0,0,0,0.09) ;
   border-radius: 5px;

   background-color: #ffffff;
`;
const PostInput =  styled.div `
  /* border:1px solid blue; */
  display: grid;
  grid-template-columns: auto 80%;
`;
const PostInputImage = styled.div `
 /* border:1px solid red; */
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 4px;
   
   img {
     /* border:2px solid green; */
     width: 50px;
     height: 50px;
     border-radius: 48px;
   }

`;
const PostInputInput = styled.div `
  /* border:1px solid purple; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4px;;

  input {
    height:50px;;
    width:100%;
    border:2px solid rgb(0,0,0,0.09);
    outline: none;
    font-size: 14px;;
    border-radius: 48px;
    padding-left: 19px;;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 900;
    &:hover {
      background-color: #efefef;

      
    }
  }
`;

const PostAction = styled.div `
  /* border:1px solid yellow;    */
  display: flex;
  padding:12px;
  justify-content: space-between;
  align-items: center;
   `;
const PostActionButton = styled.div `
  /* border:1px solid red; */
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 42px;
  width: auto;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 1px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  img{
    width: 14px;
    height: 20px;
    margin-right: 2px;
  }
  
   &:hover {
        background-color: #7594c2;
        border-radius: 4px;
        opacity: 0.3;
       border-radius: 4px;
       padding: 0px 8px;
   }

`;







const MainCard = styled.div `
  border:1px solid green;
  margin-top: 4em;
  border-radius: 4px;
`;
