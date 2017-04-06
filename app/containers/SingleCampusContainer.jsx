import React, {Component} from 'react';
import store from '../store';
import SingleCampus from '../components/SingleCampus';

class SingleCampusContainer extends Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, store.getState(), 
    {selectedCampus: store.getState().campuses[this.props.params.id - 1], selectedStudents: store.getState().students
    .filter(student => student.campusId === this.props.params.id - 1)});
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
    return <SingleCampus campus={this.state.selectedCampus} students={this.state.selectedStudents}/>;
  }

}

export default SingleCampusContainer;