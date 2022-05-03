import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import {useDispatch,useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getTotals} from './features/cart/cartSlice'
import Modal from './components/Modal'
import {getCartItems} from './features/cart/cartSlice' 
import { store } from "./store";

function App() {
  const dispatch = useDispatch();
  const {isOpen} = useSelector((store)=>store.modal)
  const {cartItems} = useSelector((state)=>state.cart)
  const {isLoading} = useSelector((store)=>store.cart)
  useEffect(()=>{
    dispatch(getTotals())
  },[cartItems])

  useEffect(()=>{
    dispatch(getCartItems())
  },[])
  
  if(isLoading){
    return (
      <div className="loading">
        <h4>Loading...</h4>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal/>}
      <Navbar/>
      <CartContainer/>
    </main>
  );
}
export default App;
