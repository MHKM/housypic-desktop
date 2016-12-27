import React from 'react';
import NavBar from './navBar/NavBar.jsx';
export default class App extends React.Component {

  render() {
    return (
      <div style={styles.appContainer}>
        <NavBar/>
        <div style={styles.pageContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

var styles = {
  appContainer : {
    height: '100%'
  },

  pageContainer : {
    padding : '10px',
    height: '100%'
  }
}
