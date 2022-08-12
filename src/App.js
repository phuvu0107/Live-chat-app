import { ChatEngine } from 'react-chat-engine';
import LoginForm from './Components/Login';
import ChatFeed from './Components/ChatFeed';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    //create project on Chat Engine then get project ID
    return (
        <ChatEngine
            height = {'100vh'}
            projectID = {'e71efaf6-c2ac-4744-bcc5-1cc40f0dd41a'}
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;
