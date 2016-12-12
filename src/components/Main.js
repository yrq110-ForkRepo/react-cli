import React from 'react'
require('../scss/main.scss')
let BingyanLogo = require('../assets/logo.png')

class AppComponent extends React.Component {
  render () {
    return (
      <div className="index">
        <img src={BingyanLogo} alt="冰岩作坊出品" />
        <div className="notice">测试</div>
      </div>
    );
  }
}

AppComponent.defaultProps = { }
export default AppComponent
