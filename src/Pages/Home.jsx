import React from 'react';

import ComponentHomeContainer from '../Components/HomeContainer';
import ComponentHowMuchUsers from '../Components/HowMuchUsers';
import ComponentHowItWork from '../Components/HowItWork';
import ComponentFooter from '../Components/Footer';

function Home() {
    return (
        <>
            <ComponentHomeContainer />
            <ComponentHowItWork />
            <ComponentHowMuchUsers />
            {/*<ComponentFooter />*/}
        </>
    );
}

export default Home;