import React, { useEffect, useState } from "react";
import './quotes.css';
import axios from "axios";
import img from './img.jpg';

export default function Quotes()
{
    const [quote, setQuote]=useState("");
    const [color, setColor]=useState("");
    const [color2, setColor2]=useState("");
    const [color3, setColor3]=useState("");

    const dynamicColors=()=> {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        if(r>200 && b>200 && g>200)
        {
            dynamicColors();
        }
        setColor("rgb(" + r + "," + g + "," + b + ")");
        setColor2("rgb(" + b + "," + r + "," + g + ")");
        setColor3("rgb(" + g + "," + b + "," + r + ")");
     };

    const quotesAPI= async()=>{
        dynamicColors();
        console.log(color);
        try{
            const data= await axios.get('https://api.quotable.io/random');
            setQuote(data.data.content);
        }catch(err)
        {
            console.log(err);
        }
    }
    
    useEffect(()=>{
        dynamicColors();
        quotesAPI();
    },[]);
    
    return(
        <div className="bg" style={{background: `linear-gradient(${color},${color2},${color3})`}}>
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>
            <div className="quotes">
                <p className="quote">{quote}</p>
                <button className="btn" onClick={quotesAPI} style={{color:color}}>Generate Another Quote</button>
            </div>
        </div>
    )
}