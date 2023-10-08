import './styles/styles.css'

function MarketPage () {
    return (
        <section>
            <article class={"Search_bar"}>
                <form id={"MyForm"}>
                    <input type={"text"} placeholder={"Search..."} id={"input_search"} />
                    <button type={"submit"}><i class={"fa fa-search"}></i></button>
                </form>
            </article>
            <article id={"React"}>

            </article>
        </section>
    );
}

export default MarketPage;