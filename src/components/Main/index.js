import { useSelector } from 'react-redux';
import { shuffle } from 'lodash';

import { Tiles } from '../index';

import './Mahjong.scss';

function Main() {
  const tiles = useSelector(state => {
    const { dataReducer } = state;
    return dataReducer.data;
  })


  return (
    <main className="mahjong">
      <div className="container">
        <div className="mahjong__content">
          {tiles.length && shuffle(tiles).map((el, index)=>
            <Tiles key={index} number={el.number} isEqual={el.isEqual}/>
          )}
        </div>
      </div>
  </main>
  )
}

export default Main;