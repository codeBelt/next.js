import './Index.scss';

import React from 'react';
import data from '../data/data.json';
import Card from '../src/modules/Card';

export default class Index extends React.Component<any, any>  {
  static async getInitialProps () {
    return { cards: data }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/static/logo.png"
               className="static-logo" alt="logo"
          />
        </header>
        <div className="Grid">
          {
            this.props.cards.map((card) => (
              <Card key={card.id} />
            ))
          }
        </div>
      </div>
    )
  }

};
