import React from 'react';
import Menu from './components/Menu';
import PostList from "./components/PostList";

function App() {
  return (
    <div className="fixed flex h-screen w-screen bg-gray-500">
        <div className="absolute flex left-1/4 h-screen w-1/2 bg-gray-600">
            <Menu />
            <PostList />
        </div>
    </div>
  );
}

export default App;
