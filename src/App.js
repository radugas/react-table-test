import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {url} from './TableSettings';
import Table from './Table';
import Button from './Button';
import Popover from './Popover';

class App extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      isLoading: false          
    };  
    this.handleDataLoad = this.handleDataLoad.bind(this);  
    this.chooseData = this.chooseData.bind(this);    
  }

  handleDataLoad = (e) => {
    const dataSize = e.currentTarget.value;
    const newUrl = url[dataSize];
    //console.log(newUrl);
    this.chooseData(newUrl);
    //console.log(e.currentTarget.value);

   }

  chooseData = (url) => {   
    this.setState({ isLoading: true });
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({items: data, isLoading: false});
        //console.log(data)
      });
  }

  render() {
    const bigData = 'big', smallData = 'small';

    return (
      <div>
        <h2>Выберите данные для загрузки.</h2>
        <Button chooseData={this.chooseData} value={smallData} title={smallData} loadData={this.handleDataLoad} />
        <Button chooseData={this.chooseData} value={bigData} title={bigData} loadData={this.handleDataLoad} />
        {this.state.isLoading && <Popover/> }
        <Table data={this.state.items}/>
      </div>  
    );
  }
}

export default App;