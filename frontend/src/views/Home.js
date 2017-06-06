import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';

export default function(props) {
  const {showLogo, text, onToggleLogo, value, onIncrement, onDecrement} = props;
  return (
    <div>
      <Header showLogo={showLogo} text={text} onToggleLogo={onToggleLogo}/>
      <Body value={value} onIncrement={onIncrement} onDecrement={onDecrement}/>
    </div>
  );
}
