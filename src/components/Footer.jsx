import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            {/* <p>Nie jesteśmy twórcami tekstur, które są na naszej stronie. Jeśli jesteś autorem jakiejś tekstury, napisz do nas na discordzie a ją usuniemy!</p>
            <a href="https://dc.txtcreator.pl">Discord</a> */}
            <div className="footer-title">
                <span>
                    Txt Creator Copyright (C) 2023
                </span>
            </div>
            
            <div className="footer-container">
                <div>
                    <div className="footer-desc">
                        <span>
                            Nie jesteśmy twórcami tekstur, które są na naszej stronie. Jeśli jesteś autorem jakiejś <br />tekstury, napisz do nas na discordzie a ją usuniemy!
                            <a href="https://dc.txtcreator.pl">Discord</a>
                        </span>
                    </div>
                </div>
                <div>
                    <div><Link to="/">Strona główna</Link></div>
                    <div><Link to="/about">O nas</Link></div>
                    <div><Link to="/creator/1-8">Stwórz TxT</Link></div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Footer