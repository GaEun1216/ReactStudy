import React,{useRef,useState} from 'react';

import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
   const [inputs,setInputs]=useState({
    username:'',
    email:''
   })
   const {username,email}=inputs;

   const onchange = e =>{
    const {name,value}=e.target;
  setInputs({
    ...inputs,
    [name]:value
  })}
   

  const[users,setUsers] = useState([{
    id: 1,
    username: 'velopert',
    email: 'public.velopert@gmail.com'
  },
  {
    id: 2,
    username: 'tester',
    email: 'tester@example.com'
  },
  {
    id: 3,
    username: 'liz',
    email: 'liz@example.com'
  }
]);

const nextId = useRef(4);
const onCreaete = () => {
  // 나중에 구현 할 배열에 항목 추가하는 로직
  const user = {
    id:nextId.current,
    username,
    email
  };
  //setUsers([...users,user]);
  setUsers(users.concat(user));

  setInputs({
    username:'',
    email:''
  });

  nextId.current += 1;
};
  return (
    <>
    <CreateUser 
    username ={username}
    email={email}
    onChange={onchange}
    onCreate={onCreaete}
    
    />
    <UserList users={users}/>
    </>
  )
}

export default App;
/* 
걍 앱 JS로 다른 JS 불러와서 화면에 띄우는 거네 ㅇㅇ
화면 구성이랑 함수 모두 하나의 JS에서 구현함
*/