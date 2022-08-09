import React from 'react';
import Menu from './components/Menu';
import PostList from "./components/PostList";

function App() {
  return (
    <div className="flex h-screen w-screen bg-gray-500 overflow-auto">
        <div className="relative left-1/4 h-screen w-1/2 bg-gray-600 overflow-auto">
            <PostList />
            <Menu />
        </div>
    </div>
  );
}

export default App;
