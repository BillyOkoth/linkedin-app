import React from "react";
import styled from "styled-components";
import {useSelector,useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import { SelectUserName,SelectUserPhoto, setSignOutState } from "../features/authSlice";
import { auth,provider } from "../firebase";

export default function Header(props) {
  const userPhoto = useSelector(SelectUserPhoto);
  const userName= useSelector(SelectUserName);
  const history = useHistory();
  const dispatch = useDispatch(setSignOutState);


  const  signOut= ()=>{

    auth.signOut().then(()=>{
      dispatch(setSignOutState());
      history.push("/");
    }).catch(err => alert(err.message));
    
  }
  
  return (
    <Container>
      <Content>
        <Logo>
          <img src="/images/home-logo.svg" alt="" />
        </Logo>
        <Search>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
          <div>
            <input type="text" placeholder="Search" type="text" />
          </div>
        </Search>
        <NavBar>
          <ListWrap>
            <List>
              <a>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </List>
            <List>
              <a>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </List>
            <List>
              <a>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </List>
            <List>
              <a>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </List>
            <List>
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </List>
            <User>
              <a onClick = {signOut}>
                <img src={userPhoto} alt="" / >
                <span>
                  Me <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </ListWrap>
        </NavBar>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ffffff;
  position: fixed;
  z-index: 100;
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.09);
  top: 0;
  left: 0;
`;

const Content = styled.div`
  /* background-color: yellow; */
  padding: 0 24px;
  display: flex;
  align-items: center;

  @media (max-width:576px) {
    /* padding:0; */
  }
`;

const Logo = styled.span`
  padding: 4px 0px 0px 0px;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  border: none;
  padding: 0px 12px;
  border-radius: 4px;
  height: 33px;
  background-color: #eef3f8;
  
  @media (max-width: 567px) {
        justify-content: center;
    /* padding:0 9px; */
  }

  @media (min-width: 567px) and (max-width: 768px) {
    /* background-color: green; */
    display: flex;
    flex-grow: 1;
    padding: 0 12px;
    justify-content: flex-start;
  }

  & > div {
    input {
      border-color: none;
      border: none;
      background-color: transparent;
      font-size: 16px;
      vertical-align: text-top;
      padding: 0 8px 0 40px;
      outline: transparent;

      @media (max-width: 567px) {
        /* padding: 0 0px 0 14px; */
      }

      @media (min-width: 567px) and (max-width: 768px) {
        padding: 0 8px 0 14px;
      }
    }
  }
`;
const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.4;
`;
const NavBar = styled.nav`
  margin-left: auto;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index:100;
    background-color: white;
  }
`;

const ListWrap = styled.ul`
  /* background-color: yellowgreen; */
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: auto;

  @media (max-width: 567px) {
    border-top: 2px solid rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
  }

  @media (min-width: 567px) and (max-width: 768px) {
    border-top: 2px solid rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;

const List = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 5px;

  a {
    display: flex;
    flex-direction: column;
    border-color: red;
    padding: 0px;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
    }

    span {
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      display: flex;
      align-items: center;

      @media (max-width: 567px) {
        font-size: 14px;
      }

      @media (min-width: 567px) and (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
`;

const User = styled(List)`
  /* @media (max-width: 567px) {
    display: none;
  }

  @media (min-width: 567px) and (max-width: 768px) {
    display: none;
  } */

  a > img {
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
    svg {
      background-color: red;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgb(0, 0, 0, 0.08);
  @media (max-width: 567px) {
    display: none;
  }

  @media (min-width: 567px) and (max-width: 768px) {
    display: none;
  }

`;
