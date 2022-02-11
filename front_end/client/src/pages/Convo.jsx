import React from 'react';
import Card from '../components/Card';
import Nav from '../components/Nav';
import Burger from '../assets/menu.svg'
import Option from '../assets/edit-text.svg'
import SignOut from '../components/SignOut';
import SideCard from '../components/SideCard';

function Convo(props) {
    let ok = props.auth
  return (
      <div>
          {/* <Nav title={"Conversation"} option={Option} decision={true}/>
          <Card />
          <SignOut auth={ok}/> */}
          <SideCard amount = {10}/>
      </div>
  )
}

export default Convo;
