import { useState,useEffect } from "react";
import "./App.css";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];
// console.log(initialArtists);

function App() {

  const [artists, setArtists] = useState(initialArtists);
  // console.log(artists);

  const [post, setPost] = useState();
  console.log(post);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data))
  })

  

  return (
    <>
      <h1 className="text-center text-5xl mt-5 font-bold">Vite + React</h1>

      <div className="mt-30">
        <ul>
          {
            artists.map(artist => <li className="m-2" key={artist.id}> {artist.name} <button
              onClick={()=> {
                setArtists(
                  artists.filter(e => 
                    e.id !== artist.id
                  )
                )
              }}
              className="btn">Delete</button> </li>)
          }
        </ul>
      </div>
    </>
  );
}

export default App;
