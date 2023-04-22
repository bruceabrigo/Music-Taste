import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {})
}

function App() {

    const [spotifyToken, setSpotifyToken] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    useEffect(() => {
        console.log('this was derived from the URL: ', getTokenFromUrl())
        const spotifyToken = getTokenFromUrl().access_token
        window.location.has = "";
        console.log('this is our spotify token: ', spotifyToken)
    
        if (spotifyToken) {
            setSpotifyToken(spotifyToken)
            setLoggedIn(true)
        }
    })
    return (
        <div className="App">
            {!loggedIn && <a href='http://localhost:8888'>Login to Spotify</a>}
            {loggedIn && (
                <>
                    <div>Logged In! Nice Brah</div>
                </>
            )}
        </div>
    );
}

export default App;
