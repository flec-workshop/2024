import React from "react";
import BigHeader from "../components/elements/BigHeader";
import Content from "../components/elements/Content";
import Countdown from "react-countdown";
import Prefooter from "../components/elements/Prefooter"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import sigarch from "../assets/sigarchLogoUC.PNG";
import ieee from "../assets/IEEE-CS_LogoTM-orange.png";
import { Link } from "react-router-dom";

const counter = ({ days, hours, minutes, seconds, completed }) => {
    return (
        <div className="countdown">
            <div>
                <span>Days</span>
                <span>{days}</span>
            </div>
            <div>
                <span>Hours</span>
                <span>{hours}</span>
            </div>
            <div>
                <span>Minutes</span>
                <span>{minutes}</span>
            </div>
            <div>
                <span>Seconds</span>
                <span>{seconds}</span>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div>
            <BigHeader />
            <Content>
                <center>
                    <h1>Call for Papers</h1>
                </center>
                <p>
                The purpose of the workshop is to investigate a comparison in terms of accuracy, overhead and resources between the different federated learning topologies introduced in literature or the design of innovative topology that can advance the state of the art. Moreover, the workshop wants to investigate practical use cases in which decentralized and innovative architecture for Federated Learning is realized.
                The workshop aims to disseminate publishable and applicable results, promoting discussions and collaborations, and to identify future research directions for supporting distributed computing at the Edge. 
                Topics include (but are not limited to) the following:
                </p>
                <ul>
                    <li>Real use-cases application of Federated Learning </li>
                    <li>Decentralized Federated Learning approaches</li>
                    <li>Comparison between different aggregation strategy and different Federated Learning architectures</li>
                    <li>Practical realizing of innovative approach for aggregation distribution</li>
                    <li>Benchmarking in Federated Learning tasks</li>
                </ul>
            
                <center>
                    <h1>Information for Authors</h1>
                </center>
                <p>
                Papers must be written in English with a minimum length of 5 pages and a maximum length of 8 pages, including text, references, appendices and figures. Authors have to use the ACM sigconf style, available <Link to="https://www.acm.org/publications/proceedings-template">at this url</Link>.
                Papers must present original work that has not appeared and is not under review elsewhere.
                Due to the double-blind peer review, all information that may allow to identify the authors must be removed from the submitted paper, like authors’ names and affiliations, acknowledgments, funding information, and all references to the authors’ work that may disclose their identity. This information can be later added to accepted papers.
                <br />
                Papers must be submitted using <Link to="https://flec2024.hotcrp.com/">HotCRP</Link> System.

                </p>
            </Content>
            <Content className="center">
                <div className="date">
                    <h2>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>3-4 June 2024</span>
                    </h2>
                </div>
                <Countdown date={new Date("2024-06-03")} renderer={counter} />
            </Content>
            {/* <Content className="center">
                <center>
                    <h1>Sponsors</h1>
                </center>
                <div className="sponsorships">
                    <img src={sigarch} alt="ACM-SIGARCH" />
                    <img src={ieee} alt="IEEE-CS" />
                </div>
            </Content> */}
            {/* <Prefooter /> */}
        </div>
    );
};

export default Home;
