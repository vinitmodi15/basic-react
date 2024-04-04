import Product from "./Product";

function ProductTab() {
    let features = ["hi-tech", "durable", "affordable"];
    let option = { a: "hi-tech", b: "durable", c: "affordable" };

    return (
        <>
            <Product title="phone" price={30000} features={features} features2={option} />
            <Product title="laptop" price={50000} features={features} features2={{d:"hello"}} /> //we can pass directly object also
            <Product title="tablet" price={20000} features={["lightweight"]} features2={option} /> //and array also
        </>
    );
}

export default ProductTab;
