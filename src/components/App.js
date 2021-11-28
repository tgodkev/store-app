import Styles from '../Styles.css'
import Header from './Header';
import Footer from './Footer'
import products from '../Products';
import Card from './Card';

function App() {
  return (
    <div>
      <Header />
      <Card 
      name = {products[0].name}
      img = {products[0].img}
      price = {products[0].price}
      />
      <Card 
      name = {products[1].name}
      img = {products[1].img}
      price = {products[1].price}
      />
      <Card 
      name = {products[2].name}
      img = {products[2].img}
      price = {products[2].price}
      />
      <Card 
      name = {products[3].name}
      img = {products[3].img}
      price = {products[3].price}
      />
      <Card 
      name = {products[4].name}
      img = {products[4].img}
      price = {products[4].price}
      />



      <Footer />
    </div>
  );
}

export default App;
