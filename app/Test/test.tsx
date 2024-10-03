import Link from 'next/link'
import React from 'react'
interface ComponentProps {
    pokemon: {
        name: string;
        url: string
    }
}
export default function Pokemonitem({ pokemon }: ComponentProps) {
    const PokemonID = pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")
    return (
        <div>
            <div>
                <Link className={`text-yellow-500`} href={"/pokemon/" + PokemonID}>
                    {`# ${PokemonID} `}
                    {pokemon.name}
                </Link>
            </div>
        </div>
    )
}
