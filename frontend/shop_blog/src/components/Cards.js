import React, { lazy, Suspense } from 'react';
import './Cards.css';

// import CardItem from './CardItem';
const CardItem = lazy(() => import('./CardItem'));

function Cards() {
  return (
    <div className='cards'>
      <h1>Leia nosso blog</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        
          <ul className='cards__items'>
            <Suspense fallback={<p>Carregando...</p>}>
            <CardItem
              src='images/coffeebuy.jpg'
              text='Café no Supermercado: Como Comprar?'
              label='dicas'
              path='/'
            />
            </Suspense>
            <Suspense fallback={<img style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, margin: "auto"}} src="https://www.eurobitume.eu/fileadmin/generic/pits_downloadcenter/Resources/Public/images/loading.gif" alt="loading banner..."/>}>
            <CardItem
              src='images/drinkingcoffee.jpg'
              text='Os Benefícios do Café no trabalho e nos estudos'
              label='dicas'
              path='/'/>
                          </Suspense>

          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='images/borracafe.jpg'
              text='Conheça 4 maneiras de reutilizar a borra do café em casa'
              label='Café e Saúde'
              path='/'
            />
            <CardItem
              src='images/capuccino.jpg'
              text='Qual é a diferença do cappuccino italiano e do cappuccino tradicional?'
              label='Receitas'
              path='/'
            />
            <CardItem
              src='images/coldbrew.jpg'
              text='O clima está quente e não ajuda? Invista em cafés gelados!'
              label='Receitas'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/borracafe.jpg'
              text='Conheça 4 maneiras de reutilizar a borra do café em casa'
              label='Café e Saúde'
              path='/'
            />
            <CardItem
              src='images/capuccino.jpg'
              text='Qual é a diferença do cappuccino italiano e do cappuccino tradicional?'
              label='Receitas'
              path='/'
            />
            <CardItem
              src='images/coldbrew.jpg'
              text='O clima está quente e não ajuda? Invista em cafés gelados!'
              label='Receitas'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
