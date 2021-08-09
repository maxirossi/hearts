import React, { useState } from 'react';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import Content  from './components/Content';

function App() {

const oHearts = [
  {
    id : 1,
    liked  : false,
  },
  {
    id : 2,
    liked  : false,
  },
  {
    id : 3,
    liked  : false,
  },
  {
    id : 4,
    liked  : false,
  },
  {
    id : 5,
    liked  : false,
  },
  {
    id : 6,
    liked  : false,
  }
];

let [hearts,updateHearts] = useState(oHearts);

const likeHeart = (id, status) => {
  const tempHearts = hearts;
  tempHearts.map((heart, i) => {
    if (heart.id === id){
      const tempHeart = {
        id : heart.id,
        liked : !heart.liked,
      }
     tempHearts[i] = tempHeart;
    }else{
      tempHearts[i] = heart;
    }
  });
  updateHearts(tempHearts);
  info();
};

const info = () => {
  console.log('Liked => ', hearts.filter(heart => heart.liked === true).length, 'Not liked =>', hearts.filter(heart => heart.liked === false).length);
};

  return (
    <div className="App">
      <Content hearts={hearts} onClickHeart={likeHeart} />
    </div>
  );
}

export default App;
