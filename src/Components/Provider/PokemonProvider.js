import React from 'react';
import * as axios from 'axios';
import { PokiContext } from '../contex/Context';




const PokemonProvider = ({children}) => {
    const [pokemons, setPokemons] = React.useState({
        pokiData: [],
        next: null,
    })
    const getNewPoki = () => {
        axios.get(pokemons.next)
        .then(response =>{
            debugger;
        })
        return {}
    } 
    return (
        <PokiContext.Provider value={getNewPoki, setPokemons} >
            {children}
        </PokiContext.Provider>
    )


}

export default PokemonProvider;