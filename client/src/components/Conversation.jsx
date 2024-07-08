import React from 'react';
import '../styles/Conversation.scss'

export const Conversation = () => {
  return (
    <div className='message'>
    <div className="messageTop">
      <img
        className="messageImg"
        src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <p className="messageText">Hello Milly , How are you!</p>
    </div>
    <div className="messageBottom">7 july 2023</div>
  </div>
    
  )
}
