/* *
  title: ShowTable.js 

  date: 5/31/2019

  author:  javier olaya

  description: the Main component that renders the table with results
         
 */
import React from 'react';
import styles from '../css/styles.css'

const ShowTable = ({ count, time, url, word }) => {
  return (
    <div className="row">
      <div className="rowHeader">
        <div className="columnHeader">{"word"}</div>
        <div className="columnHeader">{"count"}</div>
        <div className="columnHeader">{"time"}</div>
      </div>
      <div className="row">
        <div className="column">{word}</div>
        <div className="column">{count}</div>
        <div className="column">{time}</div>
      </div>
      <div className="columnHeader">{"url"}</div>
      <div className="row">
        <div className="url">{url}</div>
      </div>
    </div>
  );
}

export default ShowTable;