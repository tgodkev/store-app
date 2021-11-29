import '../Styles.css'
import Header from './Header';
import Footer from './Footer'
import products from '../Products';
import Card from './Card';


function createCard(product){
  return(
    <Card 
      key={product.id}
      name={product.name}
      img={product.img}
      price={product.price}
    />
  )

}


function App() {
  return (
    <div>
      <Header />
      {products.map(createCard)}

      <Footer />
    </div>
  );
}

export default App;
