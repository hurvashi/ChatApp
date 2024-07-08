import React from 'react';


import '../styles/Home.scss';
import { People } from './People';
import { Conversation } from './Conversation';
import { SearchBar } from './SearchBar';

export const Home = () => {
  

  return (
    <div className="homeContainer">
      <div className="peopleContainer">
        <SearchBar/>
      <div className="people"> 
        <People/>
        <People/>
        <People/>
        <People/>
        <People/>
      </div>
      </div>
      <div className="conversationContainer">
        <div className="conversations">
          <div className="messages">
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          </div>
        
         <div className="msgBox">
          <textarea
          placeholder="write something..."
          className='msgInput'
          />
          <button>send</button>
         </div>
        </div>
       
      </div>
    </div>
  );
};
