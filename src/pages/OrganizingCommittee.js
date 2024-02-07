import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";

import alessio from "../assets/photos/people/alessio.jpeg";
import feras from "../assets/photos/people/feras.jpeg";
import bahaman from "../assets/photos/people/bahman.jpeg";
import amir from "../assets/photos/people/amir.jpeg";
import maria from "../assets/photos/people/maria.jpeg";

const OrganizingCommittees = () => {
    return (
        <PageWrapper>
            <Content>
                <h1>Organizing Committees</h1>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <h3>General Co-Chair(s)</h3>
                            </th>
                        </tr>
                        <tr>
                            <td className="tdCommittee"><img className="imgCommittee" src={alessio} alt="Alessio Catalfamo" /></td>
                            <td><h4>Alessio Catalfamo, University of Messina, Italy</h4>
                            He holds a Ph.D. in Distributed Systems from the University of Messina in 2023. From 2018 to 2019 he held a postgraduate fellowship in a project for Sustainable Mobility in partnership with the Municipality of Messina and from 2019 to 2020 he held a postgraduate fellowship in Italy Minister Project “PON Metro”. His research interests are focused on Edge Computing, Cloud-Edge Continuum and Federated Learning.                             </td>
                        </tr>
                        <tr>
                            <td className="tdCommittee"><img className="imgCommittee" src={feras} alt="Feras M. Awaysheh" /></td>
                            <td><h4>Feras Awaysheh, University of Tartu, Estonia</h4>
                            He is an Associated Professor of Edge Intelligence and the Head of the EiDA (Edge Intelligence and Data Analytics) Research Group at the University of Tartu, Estonia. He holds a Ph.D. in Big Data and Cloud Computing from the University of Santiago de Compostela (CiTIUS research center) in Spain. He is associated and guest editor of several Q1 journals (including Springer Cluster Computing, IEEE Access, Elsevier Information Processing and Management, and Sensors). Dr. Awaysheh has chaired many conferences in big data, IoT, edge computing, and cloud computing (e.g., FLTA2023, CBDCom2023, FMEC2023, iEDGE2023, IDSTA, MegaData). He has authored and co-authored several articles on large-scale data analytics and trustworthy edge architectures in high-ranked conferences and journals. His research focuses on reliable and secure edge intelligence frameworks and applications. Also, developing parallel and distributed algorithms for edge-to-cloud applications. Most recently, his research focused on Federated Learning deployment models and technologies.
                            </td>
                        </tr>
                        <tr>
                            <td className="tdCommittee"><img className="imgCommittee" src={bahaman} alt="Bahman Javadi" /></td>
                            <td><h4>Bahman Javadi,  Western Sydney  University, Australia</h4>
                            He is  is a Full Professor in Networking and Cloud Computing at Western Sydney University. Prior to this appointment, he was a Research Fellow at the University of Melbourne and a Postdoctoral Fellow at the INRIA Rhone-Alpes, France. He has published more than 120 papers in high quality journals and international conferences and received numerous Best Paper Awards at IEEE/ACM conferences for his research papers. He has received multiple national awards including IoT Impact Awards and InnovationAUS Awards for Excellence for his research projects. He is a Senior Member of ACM, Senior Member of IEEE, Executive Committee Member of the IEEE Technical Committee on Cloud Computing (TCCLD), and Senior Fellow of the Higher Education Academy of UK
                            </td>
                        </tr>
                        <tr>
                            <td className="tdCommittee"><img className="imgCommittee" src={amir} alt="Amir Taherkordi" /></td>
                            <td><h4>Amir Taherkordi, University of Oslo, Norway </h4>
                            He is  s a Full Professor at the Department of Informatics, University of Oslo (UiO). He received the Ph.D. degree from the Informatics Department, University of Oslo (UiO), Oslo, Norway in 2011. After completing his Ph.D. studies, he was with Sonitor Technologies as a Senior Embedded Software Engineer. From 2013 to 2018, he was a Researcher with the Networks and Distributed Systems (ND) group, Department of Informatics, UiO. He has authored and coauthored several articles in high-ranked conferences and journals and experience from several national (Norwegian Research Council) and international (European research funding agencies) research projects. He is an Associate Editor for IEEE Transactions on Network Science and Engineering. Amir's research interests include resource-efficiency, scalability, adaptability, dependability, mobility and data-intensiveness of distributed systems designed for emerging computing technologies, such as Internet of Things (IoT), Fog/Edge/Cloud Computing, and Cyber-Physical Systems (CPS).
                            </td>
                        </tr>
                        <tr>
                            <td className="tdCommittee"><img className="imgCommittee" src={maria} alt="Maria Fazio" /></td>
                            <td><h4>Maria Fazio, University of Messina, Italy</h4>
                            She is Associate Professor in Computer Science. She was involved in several national and international projects (e.g., EU-FP7 RESERVOIR, EU-FP7 CloudWave , EU-H2020 BEACON, EU-H2020 URBANITE  and the new Horizon Europe project TEMA). She is member of the Editorial Review Board of several international journals (e.g., Scientific Reports, Computing-Springer-Verlag Wien, Wireless Communications and Mobile Computing-John Wiley & Sons and Hindawi). Currently, she is responsible for the University of Messina of the CINI “HPC: Key Technologies and Tools” (HPC-KTT) National Laboratory. 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Content>
        </PageWrapper>
    );
};

export default OrganizingCommittees;
