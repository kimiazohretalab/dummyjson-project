import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './components/cart/cart';
import { Layout } from './components/layout';
import { ProductIndex } from './components/products';
import { SingleP } from './components/products/singlep';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductIndex />} /> 
          <Route path='cart' element={<Cart />} />
          <Route path='products/:id' element={<SingleP />} />
          <Route path='products/:id/cart' element={<Cart />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
