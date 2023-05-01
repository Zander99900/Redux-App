import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from "../state/index"
const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount);
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h1>Zander Bank</h1>
        <h2>Buy PUMA Shoes: ₹100</h2>
      <button type="button" className="btn btn-info mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
      Updated Balance: ({balance})
      <button type="button" className="btn btn-info mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
