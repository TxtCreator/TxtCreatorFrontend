import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

// const API_URL = "http://localhost:5049";
const API_URL = "https://api.txtcreator.pl";

function Creator() {
    const { version } = useParams();
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [textures, setTextures] = useState([]);

    useEffect(() => {
        async function getCategories() {
            const data = (await axios.get(API_URL + "/txt/categories/" + version.replace("-", "."))).data;
            console.log(data);
            setCategories(data);
        }
        getCategories();
    }, []);

    useEffect(() => {
        setTextures([]);
    }, [subCategories]);

    return (
        <>
            {categories.map((category, index) => <img key={index} onClick={() => setSubCategories(category.subCategories)} src={"/buttons/" + category.name + ".png"}/>)}
            {subCategories.map((subCategory, index) => <p key={index} onClick={() => setTextures(subCategory.textures)}>{subCategory.name}</p>)}
            {textures.map((texture, index) => <img key={index} src={API_URL + "/" + texture} />)}
        </>
    );
}

export default Creator;