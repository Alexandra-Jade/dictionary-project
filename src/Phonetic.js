import React from "react";
import "./Phonetic.css"
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic (props) {
    if (props.phonetic.audio) {
        return (
          <div className="phonetic mt-3 mb-1">
            <div>
              <ReactAudioPlayer
                className="audio-player"
                src={props.phonetic.audio}
                autoPlay={false}
                controls={true}
              />
            </div>

            <div className="text mb-2 ms-3">{props.phonetic.text}</div> 


          </div>
        );
      } else {
        return null;
      }
    }
    
