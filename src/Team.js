import team_1 from './img/team-1.jpg'
import team_2 from './img/team-2.jpg'
import team_3 from './img/team-3.jpg'

function Team() {
    return (
        <section id="teams">
            <div>
                <h2>Meet Our Team</h2>
                <div className='flex-space-wrap-center'>
                    <div className="cards">
                        <img src={team_1} />
                        <h5>Stephen Aguilar</h5>
                        <p>Software Developer</p>
                        <a href='https://github.com/inamonanymous' target="_blank">
                            <button className="alt"> 
                                More Details
                            </button>
                        </a>
                    </div>
                    <div className="cards">
                        <img src={team_2} />
                        <h5>Hannah Grampa</h5>
                        <p>Manuscript Editor</p>
                        <a href='https://www.facebook.com/Hansgrampa' target="_blank">
                            <button className="alt"> 
                                More Details
                            </button>
                        </a>
                    </div>
                    <div className="cards">
                        <img src={team_3} />
                        <h5>Kervie Pesquesa</h5>
                        <p>Project Manager</p>
                        <a href='https://www.facebook.com/kerviep.12' target="_blank">
                            <button className="alt"> 
                                More Details
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Team;