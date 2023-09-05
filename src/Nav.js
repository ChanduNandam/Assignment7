import './Nav.css';

function Nav() {
    var home = "Home";
    return (
      <div id="nav">
        <ul>
          <li>
            <a href=""> {home} </a>
          </li>
          <li>
            <a href=""> Profile </a>
          </li>
          <li>
            <a href=""> Products </a>
          </li>
          <li>
            <a href=""> Login </a>
          </li>
        </ul>
      </div>
    );
  }

  export default Nav;
