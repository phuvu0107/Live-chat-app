const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div className="message-row">
            {/* first message by the user */}
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                />
            )}
            {/* general case */}
            {message?.attachments?.length > 0
                ? (
                    <img
                        src={message.attachments[0].file}
                        alt='message-attachment'
                        className='message-image'
                        style={{ marinLeft: isFirstMessageByUser ? '4px' : '48px' }}
                    />
                ) : (
                    isFirstMessageByUser ? (
                        <div className="message" style={{ float: 'left', color: 'white', backgroundColor: '#CABCDC' }}>
                            {message.text}
                        </div>
                    ) : (
                        <div className="message" style={{ float: 'left', marginLeft: '52px', color: 'white', backgroundColor: '#CABCDC' }}>
                            {message.text}
                        </div>
                    )
                    
                )
            }

        </div>
    )
}

export default TheirMessage;