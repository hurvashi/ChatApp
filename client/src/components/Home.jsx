import React, { useContext, useEffect, useState } from 'react';


import '../styles/Home.scss';
import { People } from './People';
import { Conversation } from './Conversation';
import { SearchBar } from './SearchBar';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

export const Home = () => {
  const [conversations,setConversations] = useState([]);
  const{user} = useContext(AuthContext);

  // useEffect(()=>{

  //   try {
  //     const getConversations = async()=>{
  //       const res = await axios.get('/conversations/'+user._id);
  //       setConversations(res.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }

  // },[user._id])

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
          <Conversation />
          <Conversation own={true}/>
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
