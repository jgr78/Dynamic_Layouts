import React, { Component} from 'react';
import {getItemsData} from './middleware';
import Logo from './components/logo';
import Grid from './components/grid';
import Message from './components/message';
import LightBox from './components/lightbox';
import Context from './store/context'
import { MAX, MIN, Desktop_TabletL, TabletP_MobileL, MobileP, LOADING, ERROR } from './config/properties';

class App extends Component {

  constructor() {
    super();
    this.HandleResizeChange= this.HandleResizeChange.bind(this);
    this.state = { 
      data: [], // 
      orientation: 'portrait-primary', // Device orientation: portrait/landscape
      device: 0, // Layout: Mobile / Tablet / Desktop 
      selected: 0, // item selected 0: none
      error: false, // error requesting the data
      clickHandler: (i) => {
        this.setState({selected: i})
      }
    };
  }
  async componentDidMount() {
    const json = await getItemsData();
    const error = (json.length) ? false : true;
    this.setState({ data: json, error });
    this.HandleResizeChange();
    window.addEventListener("resize", this.HandleResizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.HandleResizeChange);
  }

  HandleResizeChange() {
    // default device is Desktop  || Tablet + Landscape
    let device = Desktop_TabletL;
    if (document.documentElement.clientWidth < MIN) {
      device = MobileP;
    } else if(document.documentElement.clientWidth < MAX) {
      device = TabletP_MobileL;
    }
    this.setState({orientation: window.screen.orientation.type, device: device});
  }
  render() {
    const styles = `
    body {
      margin: 10px;
      padding: 0;
      font-family: sans-serif;
      background-color: #ffe19e;
    }
    .hidden_block, .page_grid {
      opacity: 0;
    }
    .show_block {
      opacity: 1;
    }
    .slow_translation{
      -webkit-transition: opacity 1s ease-in-out;
      -moz-transition: opacity 1s ease-in-out;
      -ms-transition: opacity 1s ease-in-out;
      -o-transition: opacity 1s ease-in-out;
      transition: opacity 1s ease-in-out;
    }`
    return (
      <div className="page">
        <section className={`page_message  slow_translation ${(this.state.data.length) ? 'hidden_block' : ''}`}>
          <Message message={this.state.error ? ERROR : LOADING}/>
        </section>
        <section className={`page_grid  slow_translation ${(this.state.data.length) ? 'show_block' : ''}`}>
          <Logo />
          <Context.Provider value={{ state: this.state }}>
              <Grid />
              <LightBox />
          </Context.Provider>
        </section>
        
        <style>{styles}</style>
     </div>
    );
  }
}

export default App;

