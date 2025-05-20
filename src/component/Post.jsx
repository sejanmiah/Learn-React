import React from "react";

const Post = ({ post, index,handleDelete }) => {
  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h1 className="font-bold text-2xl text-gray-300">{index + 1}.Number Post</h1>
        <h2 className="card-title">{post.title}</h2>

        <p>{post.body}</p>
        <div className="justify-end card-actions">
          <button onClick={() => handleDelete(post.id)} className="btn btn-primary">delete</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
