import { current } from '@reduxjs/toolkit'
import { formatCurrency } from '../../utils/helpers'
import DeleteItem from './DeleteItem'
import UpdateItemQuantity from './UpdateItemQuantity'
import { useSelector } from 'react-redux'
import { getCurrentQuantityById } from './cartSlice'

export default function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))
  return (
    <li className='py-3 sm:flex sm:items-center sm:justify-between'>
      <p className='sm:mb0 mb-0'>
        {quantity}&times; {name}
      </p>
      <div className='flex items-center justify-between sm:gap-6'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  )
}
