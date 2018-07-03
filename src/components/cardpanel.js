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
      console.log(this.state);
      const numbers = this.state;
    var arr = [];
    Object.keys(numbers).forEach(function(key) {
      arr.push(numbers[key]);
    });                 
    return (
      <div className="container-fluid margin-top-xl jobsearchBox">
      <div className="row">
      {arr.map(item => <MyAppChild designation={item.designation} Experience={item.Experience} location={item.job_location} skills={item.technologies}  postedDate={item.posting_date}/>)}
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
                <p><b>Verizon Data Service</b></p>
                <ul>
                  <li><span class="glyphicon glyphicon-briefcase"></span> {this.props.Experience}</li>
                  <li><span class="glyphicon glyphicon-pushpin"></span> {this.props.location}</li>
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