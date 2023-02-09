import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import './App.css' 
import LoginForm from './components/LoginForm';

const App= () =>  {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
      <ChatEngine
        height="100vh"
        projectID="576acd99-0863-44b5-986b-f13a9c08fef4"
        userName= {localStorage.getItem('username')}
        userSecret= {localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps)=> 
            <ChatFeed {...chatAppProps} /> 
        }
      />
    );
}
export default App