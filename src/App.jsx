import { useState } from 'react';
import './App.css'

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];
// console.log(initialArtists);



function App() {
  const [artists, setArtists] = useState(initialArtists);
  // console.log(artists);


  return (
    <>
      <h1 className='text-center text-5xl mt-5 font-bold'>Vite + React</h1>

    </>
  )
}

export default App
