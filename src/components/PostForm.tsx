import React from "react";

function PostForm({visible, onExit}: {visible: boolean, onExit: () => void}) {
    const [title, setTitle] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [content, setContent] = React.useState("");

    if(!visible)
        return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
            <div className="bg-gray-800 p-2 rounded w-72">
                <button className="relative m-1 flex justify-start text-white" onClick={() => onExit()}>X</button>

                <h1 className="font-semibold text-center text-xl text-white">
                    Create Post
                </h1>
                <p className="text-center text-white-700 mb-5"></p>

                <div className="flex flex-col">
                    <input
                        type="text"
                        id="title"
                        className="border border-gray-700 bg-gray-500 p-2 rounded mb-5"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        id="author"
                        className="border border-gray-700 bg-gray-500 p-2 rounded mb-5"
                        placeholder="Posting As"
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <input
                        type="text"
                        id="content"
                        className="border border-gray-700 bg-gray-500 p-2 rounded mb-5"
                        placeholder="Content"
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="text-center">
                    <button className="px-5 py-2 bg-gray-700 text-white rounded" onClick={() => {
                        submitPost({title: title, author: author, content: content});
                        onExit();
                    }}>
                        Submit Post
                    </button>
                </div>
            </div>
        </div>
    );
}

function submitPost(post: {title: string, author: string, content: string}) {
    fetch('http://localhost:8080/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(res => res.json())
        .then(data => console.log(data))
    window.location.reload();
}

export default PostForm;