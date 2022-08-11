import React from 'react';
import Menu from './components/Menu';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [postFormVisible, setPostFormVisible] = React.useState(false);

    return (
    <div className="flex h-screen w-screen bg-gray-500 overflow-auto">
        <div className="relative left-1/4 h-screen w-1/2 bg-gray-600 overflow-auto">
            <Menu formChanged={() => setPostFormVisible(true)}/>
            <PostList />
            <PostForm visible={postFormVisible} onExit={() => {
                setPostFormVisible(false)
            }}/>
        </div>
    </div>
    );
}

export default App;
