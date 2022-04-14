import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
                <div className={classes.logo}>Flex</div>
      <nav>
        <ul>
            <li><a>About</a></li>
            <li><a>Tariffs</a></li>
            <li><a>Request</a></li>
            <button>Login</button>
        </ul>
      </nav>
    </header>
    );
}

export default Header;