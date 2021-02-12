import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Banner.css';
// import Video from './Video';


function Banner() {
  return (
    <div className='hero-container'>
      <video src='/videos/coffeebanner.mp4' autoPlay loop muted />
      {/* <Video /> */}
      <h1>Cafés especiais diretamente do produtor</h1>
      <p>Descontos super especiais para programadores</p>
      <div className='hero-btns'>
        <Button className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                Saiba Mais
        </Button>
        <Button className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={console.log('hey')}>
          Adquira o seu
        </Button>
      </div>
    </div>
  );
}

export default Banner;
