import React, { Component } from 'react';
import axios from 'axios';


class CardPanel extends Component {
  state = {
    persons: []
  }
  componentWillMount() {
    axios.get(`http://10.74.19.207:9004/careers/currentOpenings`)
      .then(res => {
        console.log(res+"tesxt");
        const persons = res.data;
        this.setState({ persons });
      })
  }
    render() {
                      
    return (
      <div className="container-fluid margin-top-xl jobsearchBox">
      <div className="row">
      {this.state.persons.map(person => <MyAppChild designation={person.designation} hiringmanager={person.hiringmanager} Experience={person.experience} location={person.joblocation} skills={person.technologies}  postedDate={person.postingdate}/>)}
      </div>
      </div>);
    }
}

class MyAppChild extends React.Component {
  render() {
    return (
      <div className="col-md-2">
            <div class="panel panel-default panel-info">
              <div class="panel-heading">
                <h3 class="panel-title"><b>{this.props.designation}</b></h3>
              </div>
              <div class="panel-body">
                <p><b>Hiring Manager: <i>{this.props.hiringmanager}</i></b></p>
                <ul>
                  <li>Experience <span class="glyphicon glyphicon-briefcase"></span> {this.props.Experience}</li>
                  <li>Location<span class="glyphicon glyphicon-pushpin"></span> {this.props.location}</li>
                </ul>
                <p>Key Skills: <i>{this.props.skills}</i></p>
              </div>
              <div class="panel-footer">
              <span>Posted: {this.props.postedDate} </span>
              </div>
            </div>
          </div>
    );
  }
}
export default CardPanel;