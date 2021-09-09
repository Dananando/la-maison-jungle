import '../styles/Cart.css';

const Cart = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const price = {
        monstera: 8,
        lierre: 10,
        bouquetDeFleurs: 15
    };
    return (<div className='lmj-cart'>
        <ul>
            <li>Monstera : {price.monstera}€</li>
            <li>Lierre : {price.lierre}€</li>
            <li>Bouquet de fleurs : {price.bouquetDeFleurs}€</li>
        </ul>
        <p>Prix total : {Object.values(price).reduce(reducer)}€</p>
    </div>)
};

export default Cart;