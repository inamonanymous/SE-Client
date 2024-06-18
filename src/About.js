import dunk from './img/ab-dunk.jpg'
import trust from './img/trust.png'
import time from './img/time.png'
import heal from './img/heal.png'

function About() {
    return (
        <section id="about">
            <div>
                <img src={dunk}/>
                <h2 className="text-color-primary">ABOUT OUR SYSTEM</h2>
                <h3>Hassle Free Equipment Borrowing System for SVCC Students</h3>
                <p>Welcome to Digital Sports Equipment Monitoring! We're dedicated to providing easy equipment borrowing solutions for SVCC Students. Join us in streamlining access to essential resources.</p>
                <ul className='flex-column-center'>
                    <li className='flex'>
                        <img src={trust}/>
                        <p>On-Time Service Guarantee</p>
                    </li>
                    <li className='flex'>
                        <img src={time}/>
                        <p>Trusted Professionals</p>
                    </li>
                    <li className='flex'>
                        <img src={heal}/>
                        <p>Environmental Friendly Practices</p>
                    </li>
                </ul>
                <button className='alt'>READ MORE</button>
            </div>
        </section>
    );
}
export default About;