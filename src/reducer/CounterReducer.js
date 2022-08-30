import React, {useReducer} from 'react'

export default function CounterReducer({start=0, step=1}) {

  //const countReducer = (prevCount, newCount) => newCount;

  //countReducer có 2 tham số:
  //Tham số 1: giá trị state hiện tại
  //Tham số 2: giá trị state mới sau khi update
  //const countReducer = (count, change) => count+change;

//   const countReducer = (state, newState) => {
//     return {...newState}
//   }

//   const countReducer = (state, action) => {
//     return {
//         ...state,
//         ...(typeof action==='function'?action(state):action)
//     }
//   }  

 const countReducer = (state, action) => {
    const {type} = action;

    switch (type){
        case 'up':
            return {
                ...state, 
                count: state.count + step
            }
        break;
           
        case 'down':
            return {
                ...state, 
                count: state.count - step
            }
        break;    

        default: 
            throw new Error(`Type không hợp lệ với ${type}`);
        break;
    }
 }   

  //const [count, setChange] = useReducer(countReducer, start);

//   const [state, setState] = useReducer(countReducer, {
//     count: start
//   });

//   const [state, setState] = useReducer(countReducer, {
//     count: start
//   })

  const [state, dispatch] = useReducer(countReducer, {
    count: start
  })  

  const handleUp = () => {
    //Khi set state ở useReducer => Cập nhật cho tham số thứ 2 của countReducer
    //setChange(step);  
  
    // setState({
    //     count: state.count+step
    // });

    // const actionUp = prevState => ({
    //     count: prevState.count + step
    // })

    // setState(actionUp)

    dispatch({type: 'up'});
    
  }  

  const handleDown = () => {
    dispatch({type: 'down'});
  }

  const {count} = state;

  return (
    <>
        <h1>Count: {count}</h1>
        <button type={'button'} onClick={handleUp}>+</button>
        <button type={'button'} onClick={handleDown}>-</button>
    </>
  )
}
