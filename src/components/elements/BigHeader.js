import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

function BigHeader(props) {
    return (
        <>
        <div className="bigHeader">
            <div>
                <h2><FontAwesomeIcon icon={faLocationArrow} /><span>Pisa, Italy</span></h2>
                <h2><FontAwesomeIcon icon={faCalendarAlt} /><span>3-4 June 2024</span></h2>
                <h2><FontAwesomeIcon />Co-located with <Link to="https://www.hpdc.org/2024/" target="blank">HPDC Conference</Link></h2>
            </div>
            <div class="right">
            <center>
                    <h2>First International Workshop on Federated Learning for Edge Computing (FLEC 2024)</h2>
                </center>
                <p>
                Federated Learning is a challenging distributed technique to train Machine Learning models in a collaborative way among a number of distributed nodes, with the additional advantages of protecting exploited raw data and ensuring the privacy of users and data owners. Federated learning well suits Edge computing applications by leveraging the computation power and the data available on dispersed Edge devices. Moreover, the scientific communities explored different kinds of architectural solutions for Federated Learning, which mainly involve a central unit (for example, in the Cloud)
                For this reason, a new approach, in which the aggregation phase is no longer performed in a central server, is born. In recent years, the scientific literature has defined new logical topologies named  decentralized federated learning or gossip learning that tries to distribute the aggregation operation, traditionally performed in a central server, among all the clients involved in the architecture.
                In this new kind of architecture, the aggregator server disappears to be replaced by a distributed aggregation performed across the local devices avoiding a single point of failure. 
                </p>
            </div>
        </div>
            {/* <div className="bigHeader">
                <div>
                    <h2><FontAwesomeIcon icon={faLocationArrow} /><span>Taormina (Messina), Italy</span></h2>
                    <h2><FontAwesomeIcon icon={faCalendarAlt} /><span>4-7 December 2023</span></h2>
                </div>
                <div class="right">
                    <img src={logo} alt="UCC 2023 Logo" />
                    <h1>The 16th IEEE/ACM International Conference on Utility and Cloud Computing (UCC 2023)</h1>
                    <Link to="https://bdcat-conference.org/"><h2>Co-located conference: BDCAT 2023</h2></Link>
                </div>
            </div> */}
        </>
    );
}

export default BigHeader;
