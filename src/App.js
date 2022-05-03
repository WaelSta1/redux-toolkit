import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import {useDispatch,useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getTotals} from './features/cart/cartSlice'
import Modal from './components/Modal'

function App() {
  const dispatch = useDispatch();
  const {isOpen} = useSelector((store)=>store.modal)
  const {cartItems} = useSelector((state)=>state.cart)
  useEffect(()=>{
    dispatch(getTotals())
  },[cartItems])
  return (
    <main>
      {isOpen && <Modal/>}
      <Navbar/>
      <CartContainer/>
    </main>
  );
}
export default App;
