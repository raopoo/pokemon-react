import './Pokedex.css';
import Card from '../Pokecard/Pokecard';


const padWithZero = (num) =>{
    return String(num).padStart(3, '0');
}
const Pokedex = (prop) =>{
    
    return(
        <div className='Pokedex'>
            {prop.arr.map(poke => 
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