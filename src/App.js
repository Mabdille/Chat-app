import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'


import './App.css'

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="3726960b-2239-4651-9d35-5b2ac1b74f0c"
            userName="Javascriptmastery"
            userSecret="123123"
            renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps } />}
        
        
        />
    )
}
export default App