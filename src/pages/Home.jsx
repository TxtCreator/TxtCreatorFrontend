import React from 'react';

import ComponentHomeContainer from '../components/HomeContainer';
import ComponentHowItWork from '../components/HowItWork';
import ComponentFooter from '../components/Footer';

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