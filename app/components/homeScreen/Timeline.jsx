import React from 'react';
import TimelineItem from './TimelineItem.jsx'

var items = [

  { id:1,
    labelDevice : 'Temperatura habitación',
    text: 'Medición registrada',
    icon : 'fa-thermometer-three-quarters',
    measure : 32.2,
    unitLabel : 'ºC'
  },

  { id:2,
    labelDevice : 'Humedad terraza',
    text : 'Medición registrada',
    icon : 'fa-tint',
    measure : 56.0  ,
    unitLabel : '%'
  }

];

export default class Timeline extends React.Component {

  render() {

    return (
      <div className= {"containerStyle " + this.props.className} >

        <div className="containerHeader"> Eventos en directo</div>

        {items.map(function(item, index){
                  return <TimelineItem item={item}/>;
                })}
      </div>
    )
  }

}
