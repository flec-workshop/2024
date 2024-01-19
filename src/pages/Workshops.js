import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";
import { Link } from "react-router-dom";

const Workshops = () => {
    return (
        <PageWrapper>
            <Content>
                <h1>Workshops</h1>
                <hr />
                <ul>
                    <li>
                    <Link to="https://www.intel4ec-workshop.nl/" target="_blank">International Workshop on Intelligent and Adaptive Edge-Cloud Operations and Services (Intel4EC 2023)</Link>
                        <br />
                        Chairs: Nishant Saurabh, Dragi Kimovski, Zhiming Zhao
                    </li>
                    <li>
                        <Link to="https://sites.google.com/view/inspire2023" target="_blank">First International Workshop on Intelligent Systems and Paradigms for Next Generation Computing Evolution (INSPIRE 2023)</Link>
                        <br />
                        Chairs: Sukhpal Singh Gill, Minxian Xu, Omer Rana, Giancarlo Fortino
                    </li>
                    <li>
                        <del><Link to="https://pace-workshop.github.io/" target="_blank">Performance-Driven Adaptive Edge/Cloud Environments (PACE 2023)</Link></del> (canceled)
                        <br />
                        Chairs: Tomáš Bureš, Petr Tůma, Omer Rana
                    </li>
                    <li>
                        <Link to="http://cifs.servicelaboratory.ch/cifs2023/" target="_blank">5th International Workshop on Cloud, IoT and Fog Systems (CIFS 2023)</Link>
                        <br />
                        Chairs: Josef Spillner, Cihan Sakman, Cristina L. Abad, Urs Seiler
                    </li>
                    <li>
                        <Link to="https://qserv23.github.io/" target="_blank">International Workshop on Quality of Service-Aware Serverless Computing (QSERV 2023)</Link>
                        <br />
                        Chairs: Matteo Nardelli, Gabriele Russo Russo, Carlo Vallati
                    </li>
                    <li>
                    <Link to="https://sites.google.com/unizar.es/cloudam2023" target="_blank">12th International Workshop on Cloud and Edge Computing and Applications Management (CloudAM 2023)</Link>
                        <br />
                        Chairs: Abdellah Chehri, Carlo Puliafito, Luiz Bittencourt
                    </li>
                    <li>
                        <Link to="https://github.zhaw.ch/pages/milt/CEICO/" target="_blank">International Workshop on the Cloud-Edge-IoT Continuum for Hyper-Distributed Applications and Services (CEICO 2023)</Link>
                        <br />
                        Chairs: Symeon Papavassiliou, Anastasios Zafeiropoulos, Leonardo Militano, Giovanni Toffetti
                    </li>
                    <li>
                        <Link to="http://www.lrc.ic.unicamp.br/dml-icc/" target="_blank">3rd International Workshop on Distributed Machine Learning for the Intelligent Computing Continuum (DML-ICC 2023)</Link>
                        <br />
                        Chairs: Marco Aldinucci, Luiz Bittencourt, Valeria Cardellini
                    </li>
                </ul>
            </Content>
        </PageWrapper>
    );
};

export default Workshops;
