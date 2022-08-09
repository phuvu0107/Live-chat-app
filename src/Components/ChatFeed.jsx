import React from 'react'
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';

const ChatFeed = (props) => {
    //destruct from props
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    //generate receipt
    const renderReceipt = (message, isMyMessage) => {
        return chat.people.map( (person, index) => person.last_read === message.id && (
            <div
                key={`read_${index}`}
                className = "read-receipt"
                style ={{float: isMyMessage ? 'right' : 'left', 
                backgroundImage: `url(${person?.person?.avatar})`
                }}
            />
        ) )
    }
    
    //generate messages
    const renderMessages = () => {
        //get the keys from messages then assign to keys
        const keys = Object.keys(messages);

        return keys.map(( key,index ) => {
            const message = messages[key];
            //if there is message make sure to find the last message
            const lastMessageKey = index === 0 ? null : keys[ index-1 ];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={ { width: '100%' } }>
                    <div className='message-block'>
                        {
                            isMyMessage
                            //we need to access to the actual mesages
                            ? <MyMessage message={message}/>
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className='read-receipts' style={ { marginRight: isMyMessage ? '18px' : '0px', matginLeft: isMyMessage ? '0px' : '68px' } }>
                        {renderReceipt(message, isMyMessage)}
                    </div>
                </div>
            )
        })
    }

    

    if(!chat) return 'Loading ...';


    return (
        <div className='chat-feed'>
            <div className = 'chat-title-container'>
                <div className='chat-title'>
                {/* the question mark make sure that we have the chat before
                accessing the title var  */}
                    {chat?.title}
                </div>

                <div className = 'chat-subtitle'>
                    {chat.people.map(person => ` ${person.person.username}`)}
                </div>
            </div>

            {renderMessages()}

            <div style= { { height: '100px' } } />
            <div className='message-form-container'>
            {/* chatId is the structure of chatFeed */}
                <MessageForm {...props} chatId={activeChat}/>
            </div>
        </div>
    )
}

export default ChatFeed;