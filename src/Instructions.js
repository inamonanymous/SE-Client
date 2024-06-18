import ins_1 from "./img/ins-1.jpg";
import ins_2 from "./img/ins-2.jpg";
import ins_3 from "./img/ins-3.jpg";
import {scrollToSection} from './custom-code.js';
function Instructions() {
    return (
        <section id="instructions">
            <div className="flex-column-center">
                <h2>HOW IT WORKS</h2>
                <div className="flex">
                    <div className="cards">
                        <img src={ins_1} />
                        <p><b>Requesting Equipment</b></p>
                        <p>
                            First, log in to your account, select the equipment you need from the available options, and then enter the expected return date accurately.
                        </p>
                        <button className="alt" onClick={() => scrollToSection('items')}>BORROW NOW</button>
                    </div>
                    <div className="cards">
                        <img src={ins_2} />
                        <p><b>Wait for Email Confirmation</b></p>
                        <p>
                        Please wait for an email notification from the administrator regarding the status of your request. They will inform you if your request has been approved or not.
                        </p>
                        <button className="alt" onClick={() => scrollToSection('items')}>BORROW NOW</button>
                    </div>
                    <div className="cards">
                        <img src={ins_3} />
                        <p><b>Equipment Pickup and Return</b></p>
                        <p>
                        If your request is approved, equipment can be claimed from the sports lab. Please ensure to return it by the given deadline.
                        </p>
                        <button className="alt" onClick={() => scrollToSection('items')}>BORROW NOW</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Instructions;