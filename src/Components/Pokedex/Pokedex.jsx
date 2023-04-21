import './Pokedex.css';
import Card from '../Pokecard/Pokecard';

const PokeArr = [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
];

const padWithZero = (num) =>{
    return String(num).padStart(3, '0');
}
const Pokedex = () =>{
    
    return(
        <div className='Pokedex'>
            {PokeArr.map(poke => 
                <Card 
                    imgUrl={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padWithZero(poke.id)}.png`}
                    name={poke.name}
                    type={poke.type}
                    base_experience={poke.base_experience}
                />
                
            )}
        </div>
    )
}

export default Pokedex;