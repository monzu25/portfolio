import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (



        <div className="footer-container my-0">
            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: "#1c2331" }}
            >
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "#10284C" }}
                >
                    © 2021 Copyright:
                    <a className="text-white text-decoration-none" href="https://mdbootstrap.com/"
                    > MONZU.COM</a
                    >
                </div>
            </footer>
        </div>


    );
};

export default Footer;