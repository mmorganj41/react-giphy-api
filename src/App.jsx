import { useState, useEffect } from 'react'
import Form from './Form/Form'
import Gif from './Gif/Gif'
import './App.css'

function App() {
  const [gif, setGif] = useState('');

  const key = "P5uO8lLwLBBa5YprX5uo5T98stTo71xF"
   
  async function makeApiCall(value) {
    const giphyUrl = (value) ? `http://api.giphy.com/v1/gifs/search?q=${value}&api_key=${key}` : `http://api.giphy.com/v1/gifs/random?api_key=${key}`;

    try {
      const responseJson = await fetch(giphyUrl);
      const data = await responseJson.json();
      if (value) {
        setGif(data.data[0].images.fixed_height.url);
      } else {
        setGif(data.data.images.fixed_height.url);
      }
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    makeApiCall();
  }, [])

  function liftTitle(input) {
    makeApiCall(input);
  }

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form liftTitle={liftTitle}/>
      <br />
      <Gif gif={gif}/>
    </div>
  )
}

export default App
