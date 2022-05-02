import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import {useDispatch,useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getTotals} from './features/cart/cartSlice'
function App() {
  const dispatch = useDispatch();
  const {cartItems} = useSelector((state)=>state.cart)
  useEffect(()=>{
    dispatch(getTotals())
  },[cartItems])
  return (
    <main>
      <Navbar/>
      <CartContainer/>
    </main>
  );
}
export default App;
