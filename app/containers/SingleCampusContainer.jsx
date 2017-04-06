import React, {Component} from 'react';
import store from '../store';
import SingleCampus from '../components/SingleCampus';

class SingleCampusContainer extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, store.getState(), {selectedCampus: store.getState().campuses[this.props.params.id] });
    console.log('SingleCampusContainer', this.state)
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
    return <SingleCampus campus={this.state.selectedCampus} students={this.state.students}/>;
  }

}

export default SingleCampusContainer;