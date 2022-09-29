import React, { useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import { useEffect } from 'react';

// Тут список пользователей: https://reqres.in/api/users

function App() {
const [users,setUsers] = useState([]);
const [loading, setIsloading] = useState(true);
const [searchValue, setSearchvalue] = useState('');
const [invise, setInvise] = useState([]);
const [succes,setSucces] = useState(false);



useEffect(()=> {
  async function getInfo() {
    try {
      const response = await fetch(`https://reqres.in/api/users`);
      const usersInfo = await response.json();
      return usersInfo
    } catch (err) {
      console.error('Произошла ошибка!', err);
    }
  }
  
  getInfo().then((item) => setUsers(item.data))
           .catch((er)=>console.log(er))
           .finally(()=>setIsloading(false))

},[]);


const onChangeSearch = (e) => {
  setSearchvalue(e.target.value);
  console.log(searchValue)
}

const onChangeInvise = (id) => {

  if(invise.includes(id)) {
    setInvise((item) => item.filter(item => item !== id))
  }
  else setInvise((item)=> [...item,id])

}

const onClickSendInfo = () => setSucces(true)



  return (
    <div className="App">
        {
succes?<Success count={invise.length}/>:<Users items={users} 
                    isLoading = {loading} 
                    onChangeSearch = {onChangeSearch}
                    searchValue = {searchValue} 
                    invise = {invise} 
                    onChangeInvise = {onChangeInvise}
                    onClickSendInfo = {onClickSendInfo}/>

        }


      
      
    </div>
  );
}

export default App