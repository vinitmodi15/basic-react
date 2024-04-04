function Product({title="item",price=25000,features,features2}){ //default value can be assigned like this here we dont need to write in the curly braces for the numbers.
    const list  = features.map((feature)=> <li>{feature}</li>)
    return(
    <div>
        <h1>{title}</h1>
        <p>{price>30000?"discount":null}</p>
        <p>{list}</p>
        //OR
        <p> {features.map((feature)=> <li>{feature}</li>)}</p>


        <p>{features2.d}</p>
    </div>
)}
export default Product;


/* OR */
// function Product(props){
//     console.log(props);
//     return(
//     <div>
//         <h1>{props.title}</h1>
//         <p>{props.price}</p>
//     </div>
// )}
// export default Product; 