import './styles/styles.css'

function AboutPage() {
    return(
        <section>
            <article className={"info"}>
                <div>
                    <h2>Vision</h2>
                    <p>Serve as a bridge between researchers from around the world, fostering collaboration and the development of open science projects.</p>
                </div>
                <div>
                    <h2>Mission</h2>
                    <p style={"font-size: large;"}><b>Discovery, Uniting Minds: LabLink<br/>Where Science Knows No Boundaries!</b></p>
                </div>
            </article>
        </section>
    );
}

export default AboutPage;