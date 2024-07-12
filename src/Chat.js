import React from 'react'

const Chat = ({socket, Username, room}) => {
  return (
    <div>
        <div className='chat-header'>
            <p>Live Chat</p>
        </div>
        <div className='chat-body'></div>
        <div className='chat-footer'>
            <input type='text' placeholder='Type a message...'/>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Chat