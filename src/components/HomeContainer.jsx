import { Link } from "react-router-dom";

function HomeContainer() {
    return (
        <div>
            <div className="mainHomeContainer">
                <div>
                    <div className="mainTitleContainer">
                        <span>TxtCreator</span>
                    </div>
                    <div className="mainDescriptionContainer">
                        <span>
                            Narzędzie dzięki któremu w łatwy sposób stworzysz swój <br />wymarzony txtpack.
                        </span>
                    </div>
                    <Link to="/creator/1-8">
                        <div className="mainButtonContainer">
                            <button className="mainButton">
                                <span>Stwórzmy go!</span>
                            </button>
                        </div>
                    </Link>
                </div>
                {/*<div className="knowMoreContainer">*/}
                {/*    Dowiedź się więcej!<br /><br />*/}
                {/*    /!*Yes I know this arrow sucks lol*!/*/}
                {/*    <span className="pseudoArrow">\/</span>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default HomeContainer