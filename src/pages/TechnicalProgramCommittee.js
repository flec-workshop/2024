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
            {/* TBD */}
            <tr>
              <td>Boris Kraychev, GATE Institute, Bulgaria</td>
            </tr>
            <tr>
              <td>Rodrigo Calheiros, Western Sydney University, Australia</td>
            </tr>
            <tr>
              <td>Reza Jabbarpour, Swinburne University, Australia</td>
            </tr>
            <tr>
              <td>Marco Garofalo, University of Pisa, Italy</td>
            </tr>
            <tr>
              <td>Mark Adrian Gambito, University of Pisa, Italy</td>
            </tr>
            <tr>
              <td>Sabtain Ahmad, TU Wien, Austria</td>
            </tr>
            <tr>
              <td>Omar Abdel Wahab, Polytechnique de Montréal</td>
            </tr>
            <tr>
              <td>SADI ALAWADI, Blekinge Tekniska Högskola (BTH), Sweden</td>
            </tr>
            <tr>
              <td>Fahed Alkhabbas, Malmö University, Sweden</td>
            </tr>
            <tr>
              <td>Addi Ait-Mlouk, University of Skövde, Sweden</td>
            </tr>
            <tr>
              <td>Florian van Daalen, Maastricht University</td>
            </tr>
            <tr>
              <td>William Lindskog, Technical University of Munich</td>
            </tr>
            <tr>
              <td>Mehreen Tahir, Dublin City University</td>
            </tr>
            TBC
          </tbody>
        </table>
      </Content>
    </PageWrapper>
  );
};

export default SteeringCommittee;
