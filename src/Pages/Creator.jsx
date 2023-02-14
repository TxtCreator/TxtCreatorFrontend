import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import FileSaver from 'file-saver';

const API_URL = "https://api.txtcreator.pl";

const txtModel = {
    name: "texturepack",
    textures: {
    }
}

function Creator() {
    const { version } = useParams();
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [textures, setTextures] = useState([]);
    const [minecraftPath, setMinecraftPath] = useState("");
    const [error, setError] = useState(null);

    let texturesLength = 0;

    function addOrRemoveTexture(texture) {
        const textureType = texture.replace(/\/p\d*(.+?)/, "").replaceAll("9", "");
        if (txtModel.textures[texture] === undefined) {
            for (const [key] of Object.entries(txtModel.textures)) {
                const keyTexture = key.replace(/\/p\d*(.+?)/, "").replaceAll("9", "");
                if (keyTexture === textureType) {
                    delete txtModel.textures[key];
                }
            }
            txtModel.textures[texture] = minecraftPath;
            texturesLength++;
        } else {
            delete txtModel.textures[texture];
            texturesLength--;
        }
        setTextures([...textures]);
    }

    function getTexturesLength() {
        return texturesLength;
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
            const data = (await axios.get(API_URL + "/txt/categories/" + version.replace("-", "."))).data;
            setCategories(data);
        }
        getCategories();
    }, []);

    useEffect(() => {
        setTextures([]);
    }, [subCategories]);

    return (
        <div className="creator">
            <div className="creatorLeftSide creatorLeft">
                <div className="top">Grupy tekstur</div>
                <div className="content">
                    {
                        categories.map((category, index) => (
                            <div>
                            <span onClick={() => {
                                setSubCategories(category.subCategories);
                                setMinecraftPath(category.minecraftPath);
                            }} key={index}>
                                {category.name[0].toUpperCase() + category.name.slice(1)}
                            </span>
                                <br />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="creatorRightSide creatorRight">
                <div className="top">Pod grupy tekstur</div>
                <div className="content">
                    {
                        subCategories.map((subCategory, index) => (
                            (
                                <div>
                                <span key={index} onClick={() => setTextures(subCategory.textures)}>
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
                <div className="top">Pod grupy tekstur</div>
                <div className="content">
                    {
                        textures.map((texture, index) => {
                            if (txtModel.textures[texture] !== undefined) {
                                return <img height="100" key={index} className="greenBorder" onClick={(event) => addOrRemoveTexture(texture, minecraftPath, event.target)} src={API_URL + "/" + texture} />
                            } else {
                                return <img height="100" key={index} onClick={() => addOrRemoveTexture(texture)} src={API_URL + "/" + texture} />
                            }
                        })
                    }
                    {error !== null && <h1>{error}</h1>}
                </div>

            </div>
            <div className="creatorFooterSide creatorFooter">
                <div className="top">
                    Informacje na temat twojej tekstury
                </div>
                <div className="content">
                    <span className="creatorFooterText">
                        <a href="#" onClick={downloadTxt}>Pobierz TXT</a>, który posiada w sobie { getTexturesLength() } tekstur.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Creator;