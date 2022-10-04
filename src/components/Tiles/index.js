import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isEquals } from '../../redux/actions/isEquals';

import './Tiles.scss';

function Tiles ({ number }) {
  const [active, setActive] = useState(false);
  const [equal, setEqual] = useState(false);
  
  const [visible, setVisible] = useState(true);

  const value = useSelector(state => {
    const { equalReducer } = state;
    return equalReducer.value;
  })

  useEffect(()=>{
    setTimeout(()=>{
      setVisible(false)
    }, 5000)
  }, [])

  useEffect(()=>{
      if(value && equal && value !== number){
        setTimeout(()=>{
          setEqual(false);
          setActive(false);
          setVisible(false);
          dispatch(isEquals(null))
        }, 1000)
      }
  }, [value])

  const dispatch = useDispatch();

  function showTile(){
    setVisible(!visible);
    if (!value){
      dispatch(isEquals(number));
      setActive(true);
      setEqual(true);
    } else if (value && value === number){
      setActive(true);
      setEqual(true);
      dispatch(isEquals(null))
    } else if (value && value !== number){
      setActive(true);
      setTimeout(()=>{
        setActive(false);
        setVisible(false);
      }, 1000)
    }
  }

  return (
    <div
      className={classNames('mahjong__tile', {
        'mahjong__tile--visible': visible,
        'mahjong__tile--active': active,
        'mahjong__tile--equal': equal
      })}
      onClick={showTile}
      >
        <span >
          {number}
        </span>
    </div>
  )
}

export default Tiles;