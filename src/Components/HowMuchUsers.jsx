import { Link } from "react-router-dom";

import CountUp from 'react-countup';

function HowMuchUsers() {
    return (
        <div className="HowMuchUsers">
            <div>
                <span className="HowMuchUsersTitle">Ilość osób które stworzyły z nami<br />coś pięknego</span><br /><br />
                <div className="HowMuchUsersContent">
                    <div className="HowMuchUsersItem">
                        <CountUp
                            start={0}
                            end={30}
                            duration={3}
                        >
                            {({ countUpRef, start }) => (
                                <span ref={countUpRef} className="HowMuchUsersItemTitle"></span>
                            )}
                        </CountUp>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowMuchUsers