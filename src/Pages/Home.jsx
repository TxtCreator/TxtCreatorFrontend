import React from 'react';

import ComponentHomeContainer from '../Components/HomeContainer';
import ComponentHowItWork from '../Components/HowItWork';
import ComponentFooter from '../Components/Footer';

function Home() {
    return (
        <>
            <ComponentHomeContainer />
            <ComponentHowItWork />
            <ComponentFooter />
        </>
    );
}

export default Home;