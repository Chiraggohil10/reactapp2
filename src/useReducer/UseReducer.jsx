import React,{useReducer} from 'react'

function reducer(state,action){
    switch(action.type){
        case "Increment" : {
            return ({count : state.count+1})
        }
        case "Decrement" : {
            return ({count : state.count-1})
        }
        case "Reset" : {
            return ({count : 0})
        }
        default : {
            throw new Error("Invalid Action")
        }
    }
}

function UseReducer() {

    let [state,dispatch] = useReducer(reducer,{count : 0})

  return (
    <>
        <div>
            <h1>Count : {state.count}</h1>
            <button onClick={() => dispatch({type : "Increment"})}>Increment</button>
            <button onClick={() => dispatch({type : "Decrement"})}>Decrement</button>
            <button onClick={() => dispatch({type : "Reset"})}>Reset</button>
        </div>
    </>
  )
}

export default UseReducer