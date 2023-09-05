import Card from './Card.js';
import Nav from './Nav.js';
import Footer from './Footer.js';


function Main() {
    return (
      <div>
        <div style={{ display: "flex" }}>

        
          <Card
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/682px-Elon_Musk_Royal_Society.jpg"
            name="Elon Musk"
            description="Elon Musk is the wealthiest person in the world, with an estimated net worth of US$226 billion as of September 2023, according to the Bloomberg Billionaires Index, and $249 billion according to Forbes, primarily from his ownership stakes in both Tesla and SpaceX. CEO and product architect of Tesla, Inc."
          />
          <Card
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Bill_Gates_July_2014.jpg/679px-Bill_Gates_July_2014.jpg" 
            name="Bill Gates" 
            description="Bill Gates, in full William Henry Gates III, (born October 28, 1955, Seattle, Washington, U.S.), American computer programmer and entrepreneur who cofounded Microsoft Corporation, the world's largest personal-computer software company. Gates wrote his first software program at the age of 13."
          />
          <Card
            imageSrc="https://i.pinimg.com/236x/b9/c5/99/b9c59981ff05a4bdeeec5403257a8591.jpg"
            name="Abdul Kalam"
            description="Abdul Kalam was known as the 'Missile Man of India' for his work in the development of ballistic missile technology. From 1992 to 1999, Kalam was the Chief Scientific Adviser to the Prime Minister and the Secretary of the DRDO. Kalam was the Chief Project Coordinator during the Pokhran II tests."
          />
        </div>
        <Footer />
      </div>
    );
  }

  export default Main;
