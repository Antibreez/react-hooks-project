import React from 'react';
import { Card } from '../components/Card';
import { Search } from '../components/Search';

export const Home = () => {
  const cards = new Array(15).fill('').map((_, i) => i)

  console.log(cards);
  return (
    <>
      <Search/>

      <div className="row">

        {cards.map((card, i) => {
          return (
            <div key={i} className="col-sm-4 mb-4">
              <Card/>
            </div>
          )
        })}
      </div>
    </>
  )
}