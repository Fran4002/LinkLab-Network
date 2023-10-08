import React from "react";
import './styles/styles.css';
import op_sc_img from './images/Open_science.jpg';

function IndexPage () {
    return(
        <section>
            <article class={"info"}>
                <div>
                    <h2>What is Open Science?</h2>
                    <p>Open science is a research and scientific practice that emphasizes transparency, accessibility, and collaboration in the process of conducting and disseminating scientific work. It involves making research methods, data, and findings openly available to fellow researchers and the public</p>
                    <p>Overall open science aims to accelerate the pace of scientific discovery, promote innovation, and increase the societal impact of research by removing barriers to access and fostering a culture of collaboration and transparency in the scientific community.</p>
                </div>
                <div class={"responsive-img"}>
                    <img src={op_sc_img} alt={"A man and a woman working together in a project"} />
                </div>
            </article>
            <article class={"info"}>
                <div>
                    <h2>Key elements of open science</h2>
                    <ul>
                        <li>Making research publications freely accessible.</li>
                        <li>Encouraging interdisciplinary cooperation</li>
                        <li>Rapidly disseminating research findings</li>
                        <li>Adhering to ethical standards</li>
                        <li>Ensure research is verifiable</li>
                        <li>Sharing research data and tools openly</li>
                    </ul>
                </div>
            </article>
            
        </section>
    );
}

export default IndexPage;