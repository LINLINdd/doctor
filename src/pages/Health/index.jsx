import React, { Component } from 'react';
import Navigation from './Navigation'
import PublicHealth from './PublicHealth';
class Health extends Component {
  render() {

    return (
      <div>
        <h1>健康质询</h1>
        <Navigation></Navigation>
        <h1>大众健康</h1>
        <PublicHealth></PublicHealth>
      </div>
    );
  }
}

export default Health;