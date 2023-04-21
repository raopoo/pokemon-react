import './Pokecard.css';

const Pokecard = (props) =>{
    const {name,type,base_experience,imgUrl} = props;
    return(
        <div className="Pokecard">
            <img src={imgUrl} alt={`pokemon img of ${name}`} />
            <h3>Name : {name}</h3>
            <h4>Type: {type}</h4>
            <h4>Base Experience: {base_experience}</h4>
        </div>
    )
}

export default Pokecard;