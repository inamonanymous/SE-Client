import logo from './img/svcc_log2.png';
import {scrollToSection} from './custom-code.js';

function Footer() {
    return (
        <footer id='footer'>
            <div className='flex-space-wrap-center'>
                <ul>
                    <li>
                        <img src={logo} />
                    </li>
                    <li>
                        Bring Shine to your Space
                    </li>
                    <li>
                        <a href='https://www.github.com/inamonanymous' target='_blank'>
                            Follow Us
                        </a>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <img />
                            </li>
                            <li>
                                <img />
                            </li>
                            <li>
                                <img />
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className='flex-column-center'>
                    <li className='title'>
                        <a onClick={() => scrollToSection('banner')}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('about')}>
                            About the Sytem
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('instructions')}>
                            How it works?
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('teams')}>
                            Team
                        </a>
                    </li>
                </ul>
                <ul className='flex-column-center'>
                    <li className='title'>
                        Our Services
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('items')}>
                            Borrow Equipment
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;