import React from "react"
import Quote from "../components/Quote"

export default function App() {

    function APIcall(){
        fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        .then(res => res.json())
        .then(json => console.log(json[0]))
    }

    return (
        <div>
            Hello World
            <Quote/>
        </div>
    )
}
