import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

/* 
Definition of a functional component named 'Sidebar'.
In React, components can be defined as functions that return JSX (a syntax extension for JavaScript).
 */
const Sidebar = () => (
    /* 
    The JSX returned by this component. 
    In this case, it's a fragment (denoted by <>) containing a simple string: "Hello from sidebar".
    Fragments allow you to group multiple elements without adding an extra node to the DOM.
    This is particularly useful for components that need to return multiple elements without a wrapper.
    */
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
    </div>
  )
  
  /*
  Exporting the Sidebar component so that it can be imported and used in other parts of the application.
  The default export means that when this file is imported, the Sidebar component will be the returned module.
  */
  export default Sidebar