import {Routes, Route} from "react-router-dom"
import {Homepage, ProductsList, ProductDetail, Login, Register, CartPage, OrderPage , DashboardPage, PageNotFound} from "../pages" 
import { ProtectedRoute } from "./ProtectedRoute"



export const AllRoutes = () => {
  return (
   <>
<Routes>
  <Route path ="/" element={<Homepage/>}></Route>
  <Route path ="/products" element={<ProductsList/>}></Route>
  <Route path="/product/:id" element={<ProductDetail/>}></Route>
  <Route path="register" element={<Register/>}></Route>
  <Route path="login" element={<Login/>}></Route>
  <Route path="cart" element={ <ProtectedRoute>  <CartPage/> </ProtectedRoute>}></Route>
  <Route path="order-summary" element={ <ProtectedRoute>  <OrderPage/> </ProtectedRoute>}></Route>
  <Route path="dashboard" element={ <ProtectedRoute>  <DashboardPage/> </ProtectedRoute>}></Route>
  <Route path ="*" element={<PageNotFound />} />

</Routes>
   </>
  )
}
