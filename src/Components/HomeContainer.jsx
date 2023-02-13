import { Link } from "react-router-dom";

function HomeContainer() {
    return (
        <div>
            <div className="mainHomeContainer">
                <div>
                    <div className="mainTitleContainer">
                        <span>TxT Creator</span>
                    </div>
                    <div className="mainDescriptionContainer">
                        <span>
                            Narzędzie dzięki któremu w łatwy sposób stworzysz swój <br />wymarzony resourcepack.
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
            </div>
        </div>
    )
}

export default HomeContainer