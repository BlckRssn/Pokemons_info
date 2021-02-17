import React from 'react';
import * as axios from 'axios';
import { PokiContext } from '../Components/contex/Context';




const PokiList = () =>{
    const poki = React.useContext(PokiContext)
  
    debugger;

    React.useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then((response) =>{
            const {data} = response
            const {next, results} = data
            debugger;
            poki.setPokemons({
               pokiData: results,
               
            })
        })

    }, [])

    return (
        <div>
            <button onClick={() => {} } >Get Pokemons</button>
        </div>
    )
}
 


export default PokiList;