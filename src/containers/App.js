import React, {useState} from "react"
import Quote from "../components/Quote"

export default function App() {
    //Aquí pueden modificar el estado, inicialmente está seteado con un objeto que tiene los atributos quote y author, que son renderizados en el componente <Quote/>
    const [frase,setFrase] = useState({
        quote: 'Quote',
        author: 'author'
    })

    function APIcall(){
        fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        .then(res => res.json())
        .then(data => {
            //Al hacer la consulta a la api, le hice console.log al resultado para que puedan ver con qué estan trabajando. Modifíquenlo para hacer algo con ese data[0] 
            console.log(data[0])
        })
    }
    return (
        <div>
            Hello World
            <Quote frase={frase} /*Le paso la frase completa a Quote*//>

            
            {/* La idea es que este botón genere la nueva frase, ¿qué función debería llamarse en su onClick? */}
            <button>Click me</button>
        </div>
    )
}


