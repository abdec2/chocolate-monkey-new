import { Statistic, Col, Row } from 'antd';
import "./Token.css"
import React, { Component } from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';

function Coundown() {
    return (
        <>
            <div className='countdown'>
                <FlipCountdown
                    hideYear
                    monthTitle='MONTH'
                    dayTitle='DAYS'
                    hourTitle='HOURS'
                    minuteTitle='MINUTES'
                    secondTitle='SECONDS'
                    endAt={'2022-11-21 01:26:58'} // Date/Time
                />
            </div>
        </>
    )
}

export default Coundown