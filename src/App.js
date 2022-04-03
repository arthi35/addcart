import './App.css';

function App() {
  const products=
   [ {
      "name":"Coffee french press",
      "img":"https://m.media-amazon.com/images/I/61rfpsbKrdL._SX450_.jpg",
      "price":"Rs.150",
      "rating":"⭐⭐⭐"
    },
    {
      "name":"Eco-friendly Coffee Mug",
      "img":"https://m.media-amazon.com/images/I/81eveI-cZ9L._SY741_.jpg",
      "price":"Rs.200",
      "rating":"⭐⭐⭐⭐⭐"
    },
    {
      "name":"Stainless Steel with Leakproof Lid Eco-Friendly Reusable Cup for Coffee",
      "img":"https://m.media-amazon.com/images/I/51dES+Ox2fL._SX569_.jpg",
      "price":"Rs.250",
      "rating":"⭐⭐⭐"
    },
    {
      "name":"BambooIndia Bamboo Toothbrush",
      "img":"https://m.media-amazon.com/images/I/511f9dIgSzL.jpg",
      "price":"Rs.100",
      "rating":"⭐⭐⭐⭐"
    },
   
    {
      "name":"Bamboo Flask",
      "img":"https://bamboodu.com/wp-content/uploads/2019/10/2986-s5mlzt.jpg",
      "price":"Rs.700",
      "rating":"⭐⭐⭐"
    },
    {
      "name":"Bio-Degradable Carry Bags 2 Sets🍀",
      "img":"https://ecolifellc.com/images/Biodegradable%20and%20compostable%20carry%20bags.jpg",
      "price":"Rs.100",
      "rating":"⭐⭐⭐⭐"
    }
    
  ]
  
  return (
    <div className="App">
      <header className="App-header">Sustainable Products🌏
   
        <button className="button1">Home</button>
        <button className="button2">About</button>
        <button className="button2">Shop</button>
        <button className="cart">🛒 Cart 0</button>
      </header>
      
    <h1 className="header1">Eco-friendly Shopping🍀🍃🍀</h1>
    <div className="product-list-container">
    {products.map((product=>
      <Cart product={product} />
      ))}
        
    </div>
    </div>
  );
}
function Cart({product}){
  
  return(
    <div className="product-container">
   <img className="product-picture" src={product.img}alt={product.name}/>
   <h2 className="product-name">{product.name}</h2>
   <p className="price">{product.price}</p>
   <p className="rating">{product.rating}</p>
   <button className="add">Add Cart🛒</button>
  
 </div>
  )
}

  
export default App;
