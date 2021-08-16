import Word from "./Word"

import { useParams } from "react-router"
import { useEffect, useState } from "react";

export default function Day(){
    const {day} = useParams();
    const [words,setWords] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/words?day=${day}`)
        .then(res=>res.json())
        .then(data=>setWords(data))
    },[day])

    return(
    <table>
        <tbody>
           {words.map(word=>(
               <Word key={word.id} word={word}/>
           ))}
        </tbody>
    </table>
    )
}