import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 FLEC - Powered by <Link to="https://fcrlab.unime.it">FCRLab</Link></p>
        </footer>
    );
};

export default Footer;