
import Pokedex from "../Pokedex/Pokedex";

const PokeArr = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];


const getRandomDecks = (arr, num) => {
    const randomArr = [...arr].sort(() => 0.5 - Math.random());

    return randomArr.slice(0, num);
};

const getWinner = (arr1,arr2) =>{
    let base1 = arr1.reduce((total, el) => {
        return total + el.base_experience;
    },0);

    let base2 = arr2.reduce((total, el) => {
        return total + el.base_experience;
    },0);

    return(base1 > base2 ? "Player 1" : "Player 2");
}

const Pokegame = () => {
    let deckA = getRandomDecks(PokeArr, 4);
    let deckB = getRandomDecks(PokeArr, 4); 
    let winner = getWinner(deckA,deckB);
    return (
        <div className="Pokegame">
            <h3>Player 1</h3>
            <div className="playerOne">
                <Pokedex arr={deckA} />
            </div>
            <h3>Player 2</h3>
            <div className="playerTwo">
                <Pokedex arr={deckB} />
            </div>
            <h1>The winner is {winner}</h1>
        </div>
    );
};

export default Pokegame;
