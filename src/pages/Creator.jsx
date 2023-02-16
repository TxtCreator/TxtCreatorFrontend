import React, {useEffect, useState} from 'react';
import axios from "axios";
import FileSaver from 'file-saver';
import {useParams} from "react-router-dom";

const API_URL = "https://api.txtcreator.pl";

function Creator() {
    const { version } = useParams();
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [textures, setTextures] = useState([]);
    const [minecraftPath, setMinecraftPath] = useState("");
    const [error, setError] = useState(null);
    const [txtModel, setTxtModel] = useState({
        name: "texturepack",
        textures: {
        }
    });

    function addOrRemoveTexture(texture) {
        const textureType = texture.replace(/\/p\d*(.+?)/, "").replaceAll("9", "");
        if (txtModel.textures[texture] === undefined) {
            for (const [key] of Object.entries(txtModel.textures)) {
                const keyTexture = key.replace(/\/p\d*(.+?)/, "").replaceAll("9", "");
                if (keyTexture === textureType) {
                    const newTxtModelTextures = txtModel.textures;
                    delete newTxtModelTextures[key];
                    setTxtModel({...txtModel, textures: {
                            ...newTxtModelTextures
                        }})
                }
            }
            const newTxtModelTextures = txtModel.textures;
            newTxtModelTextures[texture] = minecraftPath;
            setTxtModel({...txtModel, textures: {
                    ...newTxtModelTextures
                }})
        } else {
            const newTxtModelTextures = txtModel.textures;
            delete newTxtModelTextures[texture];
            setTxtModel({...txtModel, textures: {
                    ...newTxtModelTextures
                }})
        }
        setTextures([...textures]);
    }

    async function downloadTxt() {
        setError(null);
        const data = await fetch(API_URL + "/txt/download", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(txtModel)
        });
        if (data.status === 200) {
            FileSaver.saveAs(await data.blob(), txtModel.name + ".zip");
        } else {
            setError("Przy pobieraniu txt poszło coś nie tak. Najprawdopodobniej nie wybrałeś żadnych tekstur.")
        }
    }

    useEffect(() => {
        async function getCategories() {
            try {
                const data = (await axios.get(API_URL + "/txt/categories/" + version.replace("-", "."))).data;
                setCategories(data);
            } catch (exception) {
                setCategories([]);
            }
        }
        getCategories();
    }, []);

    useEffect(() => {
        setTextures([]);
    }, [subCategories]);

    return (
        <>
            {/*<div className="chooseVersion">*/}
            {/*    <span>Wybierz wersję</span>*/}
            {/*    <a onClick={() => setVersion("1.8")}>1.8</a>*/}
            {/*    <a onClick={() => setVersion("1.16")}>1.16</a>*/}
            {/*</div>*/}
            <div className="creator">

                <div className="creatorLeftSide creatorLeft">
                    <div className="top">Grupy tekstur {version}</div>
                    <div className="content">
                        {
                            categories.map((category, index) => (
                                <div key={index}>
                            <span className="click" onClick={() => {
                                setSubCategories(category.subCategories);
                                setMinecraftPath(category.minecraftPath);
                            }} >
                                {category.name[0].toUpperCase() + category.name.slice(1)}
                            </span>
                                    <br />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="creatorRightSide creatorRight">
                    <div className="top">Podgrupy tekstur</div>
                    <div className="content">
                        {
                            subCategories.map((subCategory, index) => (
                                (
                                    <div key={index}>
                                <span className="click" onClick={() => setTextures(subCategory.textures)}>
                                    {subCategory.name[0].toUpperCase() + subCategory.name.slice(1)}
                                </span>
                                        <br />
                                    </div>
                                )
                            ))
                        }
                    </div>
                </div>
                <div className="creatorRightDownSide creatorRightDown">
                    <div className="top">Tekstury</div>
                    <div className="content">
                        {
                            textures.map((texture, index) => {
                                if (txtModel.textures[texture] !== undefined) {
                                    return <img height="100" key={index} className="textureBorder click" onClick={(event) => addOrRemoveTexture(texture, minecraftPath, event.target)} src={API_URL + "/" + texture} />
                                } else {
                                    return <img className="click" height="100" key={index} onClick={() => addOrRemoveTexture(texture)} src={API_URL + "/" + texture} />
                                }
                            })
                        }
                    </div>

                </div>
                <div className="creatorFooterSide creatorFooter">
                    <div className="top">
                        Informacje na temat twojego txt
                    </div>
                    <div className="content">
                    <span className="creatorFooterText">
                        <a href="#" onClick={downloadTxt}>Pobierz TXT</a>, który posiada w sobie {Object.keys(txtModel.textures).length} tekstur/y.
                    </span>
                        {error !== null && <p>{error}</p>}
                    </div>
                </div>
            </div>
        </>

    );
}

export default Creator;