import React from 'react';


export default class TimelineItem extends React.Component {


  render() {

    var {text, icon, measure, unitLabel, labelDevice} = this.props.item;

    return (
      <div style={styles.itemContainer}>

        <div style={styles.iconItem}>
          <i className={"fa " + icon} aria-hidden="true"></i>
        </div>

        <div style={styles.bodyItem}>
          <span style={styles.deviceName}>{labelDevice}</span>
          <span style={styles.deviceTime}> - Hace 10 min </span>
          <div style={styles.deviceMessage}>
            {text}
          </div>
        </div>

        <div style={styles.measureItem}>
          <span> {parseFloat(Math.round(measure * 100) / 100).toFixed(1)} {unitLabel} </span>
        </div>

      </div>
    )
  }
}

const styles = {

  itemContainer : {
    display : 'flex',
    flexFlow : 'row',
    justifyContent : 'flexStart',
    alignItems : 'center',
    alignContent: 'center',
    borderBottom : 'solid lightgrey 1px',
    marginBottom : '10px',
    paddingBottom : '10px'
  },
  iconItem : {
    width:'48px',
    height:'48px',
    display: 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    fontSize : '30px',
    color : '#1898C4'

  },

  measureItem : {
    height:'48px',
    display: 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    fontSize : '20px',
    color : '#1898C4',
    paddingLeft: '20px'
  },

  bodyItem : {
    flex:'3',
    paddingLeft:'15px'
  },

  deviceName : {
    fontWeight : 'bold'
  },

  deviceTime : {
    color : '#66757f',
    fontSize: '12px'
  },

  deviceMessage : {
    paddingTop: '5px'
  }

}
