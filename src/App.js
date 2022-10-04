import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Space, Spin } from 'antd';

import { dataLoad } from "./redux/actions";
import { Header, Main } from './components';

function App() {
  const loading = useSelector(state=> {
    const { loadReducer } = state;
    return loadReducer.load;
  });

  const dispatch = useDispatch();

  useEffect(()=>{
    let arr = makePrimeNumArr(1, 60);
    dispatch(dataLoad(arr))
  }, [])

  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0){
            return false
        }
    };
    return num > 1;
  }

  function makePrimeNumArr(a, b){
    let arr = []
    while (a !== b){
        arr.push(a);
        a++;
    }
    let primeArr = arr.filter(n => isPrime(n))
    return [...primeArr, ...primeArr]
  }


  return (
      loading ?
        <Space size="middle">
          <Spin size="large" className="spin"/>
        </Space> :
      <>
        <Header />
        <Main />
      </>
  );
}

export default App;
