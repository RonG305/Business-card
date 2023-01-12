import React from 'react';


const Header = () => (

    <div className="header">
        <div className="header-section">
            <img src="./display.jpg" alt="" />
            <h3>Laura Smith</h3>
            <p>Front-end Developer</p>
            <small>Laurasmith.website</small>
            <div className="buttons">
                <button className="email"> <i className="fa-solid fa-envelope" />Email</button>
                <button className="linkedIn">LinkedIn</button>
            </div>

        </div>


    </div>
  );

export default Header;
