import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import { MagicSpinner } from "react-spinners-kit";

import "./Dictionary.css";

export default function Dictionary(props) {

    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults]= useState(null );
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handelDictionaryResponse(response) { 
        setResults(response.data[0]);
    }

    function handelPexelsResponse(response) {
        setPhotos(response.data.photos);
    }

     function search() {
         // documentation:  https://dictionaryapi.dev/
         let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
         axios.get(apiUrl).then(handelDictionaryResponse);

let pexelsApiKey ="563492ad6f91700001000001c64428d039284586baaf52243d325fbd";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
axios.get(pexelsApiUrl, { headers: headers}).then(handelPexelsResponse);

     }

    function handleSubmit(event) {
        event.preventDefault();
        search();

    }

function load() {
   setLoaded(true);
   search(); 
}



    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    if(loaded) {
        return (
            <div className="Dictionary ">
                <section>
                    <h1> What are you looking for?</h1>
                <form onSubmit={handleSubmit} >
                    <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
                </form>
                <div className="hint">
                    suggested words: chocolate, roses, meditation, dream
                </div>
                </section>
                
                <Results results={results} />
                <Photos photos={photos}/>
                
            </div>
        );
    } else {
        load();
        return (
            <MagicSpinner />

        );

    }


}