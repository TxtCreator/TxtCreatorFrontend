import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-title">
                <span>
                    TxtCreator Copyright (C) {new Date().getUTCFullYear()}
                </span>
            </div>
            
            <div className="footer-container">
                <div>
                    <div className="footer-desc">
                        <span>
                            Nie jesteśmy twórcami tekstur, które są na naszej stronie. Jeśli jesteś autorem jakiejś <br />tekstury, napisz do nas na discordzie a ją usuniemy!
                        </span>
                    </div>
                </div>
                <div>
                    <div><Link to="/">Strona główna</Link></div>
                    {/*<div><Link to="/about">O nas</Link></div>*/}
                    <div><Link to="/menu-creator">Stwórz TXT</Link></div>
                    <div><a target="_blank" href="https://dc.txtcreator.pl">Discord</a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer