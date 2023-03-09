import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../components/Loader.jsx";

const API_URL = "https://api.txtcreator.pl";

function Creator() {
    const [versions, setVersions] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function getVersions() {
            const data = (await axios.get(API_URL + "/txt/versions")).data;
            setVersions(data);
            setLoading(false);
        }
        getVersions();
    }, []);

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div className="chooseVersion">
            <div>
                <div className="chooseVersionTitle">
                    <span>Wybierz wersję</span>
                </div>
                <div className="chooseVersionContainer">
                    {versions.map(version => {
                        const formattedLink = "/creator/" + version.replace(".", "-");
                        return <div>
                            <Link to={formattedLink}>{version}</Link>
                        </div>
                    })}
                </div>
            </div>

        </div>
    );
}

export default Creator;