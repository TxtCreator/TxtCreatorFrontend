import React, {useState} from 'react';
import {useParams} from "react-router-dom";

function Creator() {
    const { version } = useParams();
    const [categories, setCategories] = useState();
    const [subCategories, setSubCategories] = useState();
    const [textures, setTextures] = useState();

    return (
        <div>
            <p>Creator</p>
        </div>
    );
}

export default Creator;