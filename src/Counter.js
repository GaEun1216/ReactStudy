// useState 함수 불러오기
import React,{useReducer} from 'react';

function reducer(state,action){
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter(){
    // 여기에 함수 명시
    const [number, dispatch] = useReducer(reducer,0);
    const onIncrease=()=>{
        //setNumber(number+1);
        dispatch({type:'INCREMENT'});
    }

    const onDecrease=()=>{
        dispatch({type:'DECREMENT'});
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;