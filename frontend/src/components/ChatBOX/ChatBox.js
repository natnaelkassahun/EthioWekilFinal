import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import logo from '../../asset/brand/Ethiowekillgo.png';
import profile from '../../asset/brand/call-center.jpg';

function Chatbox() {
  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

    return (
      <div className="App">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={profile}
          title="EthioWekil Chatbot"
          subtitle=" "
          titleAvatar={logo}
        />
      </div>
    );
}

export default Chatbox;
