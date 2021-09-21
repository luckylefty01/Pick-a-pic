import React, {useState, useEffect} from 'react';
import Heart from "react-animated-heart";

export default function Photos() {

    const [photoData, setPhoto] = useState([]);
    
    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=K2qpEA9Sghudf46QgREROngHYEarQhJKmzO95ChK");

            const data = await res.json();
            setPhoto(data);
            console.log(data);
        }
       
}, []);

    const [isClick, setClick] = useState(false);


    return (
     
     <div className="container">
          <img src= {photoData.url} />
        <div>
            <h2>{photoData.title}</h2>
            <h4>{photoData.date}</h4>
            <p>{photoData.explanation}</p>
        </div>
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />    </div>
       
    
    )

}

