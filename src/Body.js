import Banner from './Banner.js';
import Instructions from './Instructions.js';
import About from './About.js';
import Items from './Items.js';
import Teams from './Team.js';

function Body() {
    return (
        <>
            <Banner />
            <About />
            <Instructions />
            <Items />
            <Teams />
        </>
    );
}

export default Body;