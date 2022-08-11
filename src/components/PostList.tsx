import React, {useEffect} from "react";

function PostList(){
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    }, []);

    return (
        <div className="absolute top-[35%] left-[13.5%] w-[72.5%]">
            {posts.map((post: {postId: number, title: string, author: string, content: string, date: string, likes: number}) => (
                <div className="relative mb-4 flex flex-col bg-gray-800 text-white">
                    <h1 className="relative text-2xl mt-2 ml-3">{post.title}</h1>
                    <text className="relative mt-1 ml-3 text-gray-400">{'By: ' + post.author}</text>
                    <text className="relative mt-4 ml-3">{post.content}</text>
                    <text className="absolute top-2 left-[calc(100%-96px)]">{post.date}</text>
                    <text className="relative top-[calc(100%-96px)] left-[calc(100%-96px)] mb-3">{/*'Likes: ' + post.likes*/}</text>

                </div>
            ))}
        </div>
    );

}

export default PostList;