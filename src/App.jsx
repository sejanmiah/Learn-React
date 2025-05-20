import { useState, useEffect } from "react";
import "./App.css";
import Post from "./component/Post";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];
// console.log(initialArtists);

function App() {
  const [artists, setArtists] = useState(initialArtists);
  // console.log(artists);

  const [posts, setPosts] = useState([]);
  console.log(posts);

  // console.log(post);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  },[]);

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <>
      <h1 className="text-center text-5xl mt-5 font-bold">Vite + React</h1>

      <div className="mt-30">
        <ul>
          {artists.map((artist) => (
            <li className="m-2" key={artist.id}>
              {" "}
              {artist.name}{" "}
              <button
                onClick={() => {
                  setArtists(artists.filter((e) => e.id !== artist.id));
                }}
                className="btn"
              >
                Delete
              </button>{" "}
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-5 mt-20">
        <h1 className="m-5 text-center text-5xl">
          API fetch and show ui, and dynamic delet data from api
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
          {posts.map((post, index) => (
            <Post handleDelete={handleDelete} post={post} index={index} key={post.id}></Post>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
