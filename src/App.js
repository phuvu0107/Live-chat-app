import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './Components/ChatFeed';
import './App.css';

const App = () => {
    //create project on Chat Engine then get project ID
    return (
        <ChatEngine
            height = {'100vh'}
            projectID = {'e71efaf6-c2ac-4744-bcc5-1cc40f0dd41a'}
            userName = {'quynhnguyen'}
            userSecret = {'1111'}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;
