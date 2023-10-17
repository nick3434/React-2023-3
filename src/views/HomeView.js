import Layout from "../components/Layout"
import productList from "../dummy/productList";
import ProductCard from "../components/ProductCard";

const HomeView = (props) => {
    console.log("props:", props)

    const productCards = productList.map((product) => {
        return <ProductCard key={product.id} product={product} />
    });

    return (
        <Layout
            title="我的網站"
            description="這是我的網站"
            darkMode={true}
        >
            <section className="py-5">
                <div className="container">
                    <h2>Home View Content</h2>
                    <div className="row my-4">
                        {productCards}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default HomeView