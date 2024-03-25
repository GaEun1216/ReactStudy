import React,{useState,useRef} from "react";

function InputSample(){
    const [inputs,setInputs]= useState({
       name:'',
       nickname:'' 
    });

    const nameInput= useRef(); // 한줄로 퉁치네?

    const {name,nickname}=inputs;

    const onChange = (e) => {
        const {value,name}=e.target;
        // e.target에서 value와 name 추출
        
        // inputs[name]:value; 식으로 수정하면 안됨 그래서 아래 코드 사용
        setInputs({
            ...inputs,  //기존의 input 객체 복사 후
            [name]:value // name키를 가진 value로 변환
        })
    }

    const onReset = () =>{
        setInputs({ 
            name:'',
            nickname:'',
        })
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            
            <input name = "nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
            </div>
    );
}

export default InputSample;