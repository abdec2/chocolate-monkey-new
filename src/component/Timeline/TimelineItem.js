import React from 'react';
import './timeline.css'
const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className='timeline-item-heading' >{data.text}</span>
            <span className='timeline-item-desc' >{data.desc}</span>
        </div>
    </div>
);

export default TimelineItem;