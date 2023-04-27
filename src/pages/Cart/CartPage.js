
import { useCart } from '../../context'
import { useTitle } from '../../hooks/useTitle'
import {CartEmpty} from './component/CartEmpty'
import {CartList} from './component/CartList'
export const CartPage = () => {
 
    const {cartList}= useCart()
    useTitle(`Games Cart (${cartList.length})`)
  return (
   
        <main>
            {cartList.length ?   <CartList /> : <CartEmpty /> }
        </main>
  
  )
}
