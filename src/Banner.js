import banner_img from './img/banner-img.jpg'
import {scrollToSection} from './custom-code.js';
function Banner() {
    return(
        <section id="banner">
            <div>
                <h4 className="text-color-primary">St. Vincent College of Cabuyao</h4>
                <h1>Digital Sports <br /> Equipment  <br /> <span className="text-color-primary">Monitoring</span></h1>
                <button onClick={() => scrollToSection('items')}>REQUEST EQUIPMENT</button>
                <div className='image-container'>
                    <img src={banner_img}></img>
                </div>
            </div>
        </section>
    );
}

export default Banner;