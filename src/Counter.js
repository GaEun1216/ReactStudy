// useState 함수 불러오기
import React,{useState} from 'react';

function Counter(){
    // 여기에 함수 명시
    const [number, setNumber] = useState(0);
    //setNumber이라는 함수에 파라미터로 number을 넘겨줌
    const onIncrease=()=>{
        //setNumber(number+1);
        setNumber(prevNumber => prevNumber +1);
    }

    const onDecrease=()=>{
        //setNumber(number-1);
        setNumber(prevNumber => prevNumber - 1);
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