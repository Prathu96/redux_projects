import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount,decrementByAmount,selectCount, } from './counterSlice'
import 'bootstrap/dist/css/bootstrap.min.css';



export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount,setIncrementAmount] = useState('2');




  return (
    <div>
      <div>
      <span style={{fontSize : "200px"}}>{count}</span>
      <br/>
      
        <button
        type="button" class="btn btn-primary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{textAlign: "center",paddingRight:"50px",paddingLeft:"50px",margin: "8px"}}
        >   
          Increment
        </button>
       
        <button
        type="button" class="btn btn-primary"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{textAlign: "center",paddingRight:"50px",paddingLeft:"50px",margin: "8px"}}
        >
          Decrement
        </button>

        <br/>
        <br/>
      <div >
        <input 
            style={{
                fontSize: "28px",
                padding: "22px",
                width: "100px",
                textAlign: "center",
                marginRight: "8px"}}
          
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
        style={{padding:"25px",textAlign: "center",margin: "10px"}}
          type="button" class="btn btn-success"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>

        <button
         type="button" class="btn btn-success" 
         style={{textAlign: "center",padding:"25px",margin: "10px"}}
          onClick={() =>
            dispatch(decrementByAmount(Number(incrementAmount) || 0))
          }
        >
          decrease Amount
        </button>
      </div>
      </div>
    </div>
  )
}