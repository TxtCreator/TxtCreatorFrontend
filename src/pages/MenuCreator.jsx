import { Link } from "react-router-dom";

function Creator() {
    return (
        <>
            <div className="chooseVersion">
                <div>
                    <div className="chooseVersionTitle">
                        <span>Wybierz wersję</span>
                    </div>
                    <div className="chooseVersionContainer">
                        <div>
                            <Link to={"/creator/1-8"}>1.8</Link>
                        </div>
                        <div>
                            <Link to={"/creator/1-16"}>1.16</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Creator;