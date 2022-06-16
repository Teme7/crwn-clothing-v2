import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

const Cart = () => {
  return(
    <div style={{ background: 'olive', color: 'lightpink', border: '2px dotted gray', margin: '15px', padding: '10px' }}>
      <h1>Welcome to your shopping cart!</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  )
};

export default App;
