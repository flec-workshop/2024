import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";

const SteeringCommittee = () => {
    return (
        <PageWrapper>
            <Content>
                <h1>Technical Program Committee</h1>
                <hr />
                <table>
                    <tbody>
                        <tr>
                                <td>Boris Kraychev, GATE Institute, Bulgaria</td>
                            </tr>
                            <tr>
                                <td>Marco Garofalo, University of Messina, Italy</td>
                            </tr>
                            <tr>
                                <td>Paula Fernanda Olaya Garcia, University of Tennessee, USA</td>
                            </tr>
                            <tr>
                                <td>Omar Abdel Wahab, Polytechnique de Montréal</td>
                            </tr>
                            <tr>
                                <td>Peter Kairouz, Google</td>
                            </tr>
                            <tr>
                                <td>Brendan McMahan, Google</td>
                            </tr>
                            <tr>
                                <td>Enrique Tomás Martínez Beltrán, University of Murcia</td>
                            </tr>
                            <tr>
                                <td>Sabtain Ahmad, TU Wien</td>
                            </tr>
                        
                        </tbody>
                </table>
            </Content>
        </PageWrapper>
    );
};

export default SteeringCommittee;
