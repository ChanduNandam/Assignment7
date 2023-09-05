import './Card.css';

function Card({ imageSrc, name, description }) {
    return (
      <div id="card">
        <img
          src={imageSrc}
          width="100%"
          height= "justify"
          alt={`Image of ${name}`}
        />
        <h2>{name}</h2>
        <p>{description}</p>
        <button>Profile</button>
      </div>
    );
  }
  export default Card;
