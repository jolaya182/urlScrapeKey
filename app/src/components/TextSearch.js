/* *
  title: TextSearch.js 

  date: 5/31/2019

  author:  javier olaya

  description:the Main component that handles the main logic for accessing and 
  organizing the main functions of the text search
         
 */
import React from 'react';
import SourceContent from './SourceContent';
import ShowTable from './ShowTable';
import styles from '../css/styles.css'

/* define the state properties of the calendar */
export default class TextSearch extends React.Component {
  /* define the state properties of the state*/
  constructor(props) {
    super(props);
    this.state = {
      count: null,
      time: null,
      url: null,
      word: null
    }
  }

    /* 
 @description handles the text submission

 @param Event

 */
  handleText = (e) => {
    e.preventDefault();
    let form = this.form;
    const _word = form[0].value;
    this.sendRequest(_word);
  }

    /* 
 @description handles the fetch logic

 @param string

 */
  sendRequest = (_word) => {
    const query = { _word: SourceContent };
    fetch("http://localhost:3000?" + "word=" + _word + "&SourceContent=" + SourceContent
    ).then((response) => {
      return response.json();
    }).then((json) => {
      this.setState((state, props) => ({
        count: json["count"],
        time: json["time"],
        url: json["url"],
        word: json["word"]
      }));
      return json;

    }).catch((error) => {
      this.setState((state, props) => ({
        count: null,
        time: null,
        url: null,
        word: null
      }
      ));
    })
  }

  render() {
    const { handleText, sendRequest } = this;
    const { count, time, url, word } = this.state;
    return <div>
      <div className={"row"}>
        <div className={"column"}>
          <form onSubmit={handleText} ref={(form) => this.form = form}>
            <input type="text" ref="_word"></input>
            <button type="submit">{"send"}</button>
          </form>
        </div>
      </div>
      <div className={"row"}>
        <div className={"column"}>
          <ShowTable count={count} time={time} url={url} word={word}></ShowTable>
        </div>
      </div>
      <div>
      <h1>{"Content Source"}</h1>
        {SourceContent}
      </div>

    </div>
  }
}