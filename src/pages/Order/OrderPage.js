import React from 'react'
import { OrderFail } from './components/OrderFail'
import { OrderSuccess } from './components/OrderSuccess'
import { useLocation } from 'react-router-dom'
import { useTitle } from '../../hooks/useTitle'

export const OrderPage = () => {
  useTitle("Order Summary")
    const {state}=useLocation()
  return (
   <main>
    {state ? <OrderSuccess data={state.data}/> : <OrderFail/>}
    </main>
  )
}
