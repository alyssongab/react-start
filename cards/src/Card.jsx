import tokitoImage from './assets/tokito.jpg'; // ajuste o caminho conforme necessário

function Card() {
    return (
        <div className="card">
            <img className='card-img' src={tokitoImage} alt="Profile picture" width="250px"/>
            <h2 className='card-title'>My Card</h2>
            <p className='card-content'>I am studying react</p>
        </div>
    );
}

export default Card;