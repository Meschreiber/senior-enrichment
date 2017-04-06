import React, {Component} from 'react';
import store from '../store';
import Campuses from '../components/Campuses';

class CampusesContainer extends Component {

  constructor() {
    super();
    this.state = Object.assign({}, store.getState());
    
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());

    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <Campuses campuses={this.state.campuses}/>;
  }

}

export default CampusesContainer;