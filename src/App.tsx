import React from 'react';
import {JoinTheNewsletter} from "./components/sections/JoinTheNewsletter/JoinTheNewsletter";
import {OurStaff} from "./components/sections/OurStaff/OurStaff";
import {Company} from "./components/sections/Company/Company";
import {Header} from "./components/sections/Header/Header";
import {Statistic} from "./components/sections/Statistic/Statistic";
import {AdoptCats} from "./components/sections/AdoptCats/AdoptCats";
import {Gallery} from "./components/sections/Gallery/Gallery";
import {AboutUs} from "./components/sections/AboutUs/AboutUs";
import {AboutAdoptedPets} from "./components/sections/AboutAdoptedPets/AboutAdoptedPets";
import {Contact} from "./components/sections/Contact/Contact";
import {AllRightReserved} from "./components/sections/AllRightReserved/AllRightReserved";
import {Footer} from "./components/sections/Footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <main>
                <AboutUs/>
                <Statistic/>
                <AdoptCats/>
                <JoinTheNewsletter/>
                <OurStaff/>
                <Company/>
                <AboutAdoptedPets/>
                <Gallery/>
                <Contact/>
            </main>
            <Footer/>
            <AllRightReserved/>
        </>
    );
}

export default App;
