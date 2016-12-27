import React from 'react';
import HomeCharts from './HomeCharts.jsx';
import Timeline from './Timeline.jsx';
import './HomeScreen.css';

export default () => {
    return (
      <div className="pageContainer">
        <HomeCharts className="asideContainer aside-1" />
        <Timeline className="timelineContainer" />
        <HomeCharts className="asideContainer aside-2" />
      </div>
    )
}
