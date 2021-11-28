import React from "react";

function Footer(){
    let year = new Date().getFullYear();
    return(
        <footer>
            <p>Code by Kev {year} </p>
        </footer>
    )
};

export default Footer;