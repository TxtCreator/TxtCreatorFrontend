import { Link } from "react-router-dom";

function HowItWork() {
    return (
        <div className="howItWork">
            <div>
                <span className="howItWorkTitle">Jak to działa?</span><br /><br />
                <div className="howItWorkContent">
                    <div className="howItWorkItem">
                        <span className="howItWorkItemTitle">Zacznij</span><br />
                        <span className="howItWorkItemDesc">Wejdź na naszą strone i kliknij przycisk "Stwórz TxT"</span>
                    </div>
                    <div className="howItWorkItem">
                        <span className="howItWorkItemTitle">Wybierz</span><br />
                        <span className="howItWorkItemDesc">Następnie wybierz tekstury które ci się podobąją i wyglądają według ciebie estetycznie.</span>
                    </div>
                    <div className="howItWorkItem">
                        <span className="howItWorkItemTitle">Pobierz</span><br />
                        <span className="howItWorkItemDesc">Jeżeli już wszystko wybrałeś pobierz swój resourcepack. Miłego używania!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWork