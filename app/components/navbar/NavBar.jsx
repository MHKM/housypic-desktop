import './NavBar.css'
import React from 'react';
import { Link, IndexLink } from 'react-router'

export default class NavBar extends React.Component {

  render() {

    var homeTab = <IndexLink className="link" activeStyle={styles.activeLink} to="/">
                    <div className="item">
                      <i className="fa fa-home " aria-hidden="true"></i>
                      <span className="tabText">Home</span>
                    </div>
                  </IndexLink>

    var actionTab = <Link className="link" activeStyle={styles.activeLink} to="/actions">
                      <div className="item">
                        <i className="fa fa-bolt " aria-hidden="true"></i>
                        <span className="tabText">Actions</span>
                      </div>
                    </Link>

    var devicesTab = <Link className="link" activeStyle={styles.activeLink} to="/devices">
                      <div className="item">
                          <i className="fa fa-microchip" aria-hidden="true"></i>
                          <span className="tabText">Devices</span>
                      </div>
                    </Link>

    var userTab = <Link className="link" activeStyle={styles.activeLink} to="/profile">
                      <div className="item">
                          <i className="fa fa-user" aria-hidden="true"></i>
                          <span className="tabText">Gonzalo</span>
                      </div>
                    </Link>

    return (
      <div className="navBarContainer" style={styles.headerContainer}>

        {/* ------ Navigation tabs ----- */}
        <div className="tabsContainer" >
          {homeTab}
          {actionTab}
          {devicesTab}
        </div>

        {/* ------ Logged user ----- */}
        <div className="userContainer">
          {userTab}
        </div>

      </div>


    )
  }
}
var styles = {
  headerContainer : {
    backgroundColor : '#1898C4',
    color : 'white'
  },
  activeLink : {
    color : '#1898C4',
    backgroundColor : '#E8F5FD'
  }

}
