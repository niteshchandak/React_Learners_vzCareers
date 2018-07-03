import React, { Component } from 'react';

class CardPanel extends Component {
    render() {
      const numbers = [{designation: "Analyst",Experience: "2-4",location :"Chennai","skills":"HTML5,css3,React",postedDate:"06/24/2018"},
                        {designation: "Specialist",Experience: "4-6",location :"Hyderabad","skills":"HTML5,css3,React",postedDate:"06/24/2018"},
                        {designation: "Tech Lead",Experience: "6+",location :"Chennai","skills":"HTML5,css3,React",postedDate:"06/24/2018"},
                        {designation: "Tech Arch",Experience: "10+",location :"Bengaluru","skills":"Mangerial skiils,React",postedDate:"06/24/2018"},
                        {designation: "Analyst",Experience: "2-4",location :"Chennai","skills":"HTML5,css3,React",postedDate:"06/24/2018"},
                        {designation: "Specialist",Experience: "4-6",location :"Hyderabad","skills":"HTML5,css3,React",postedDate:"06/24/2018"},
                        {designation: "Tech Lead",Experience: "6+",location :"Chennai","skills":"HTML5,css3,React",postedDate:"06/24/2018"},
                        {designation: "Tech Arch",Experience: "10+",location :"Bengaluru","skills":"Mangerial skiils,React",postedDate:"06/24/2018"},
                        {designation: "Specialist",Experience: "4-6",location :"Hyderabad","skills":"HTML5,css3,React",postedDate:"06/24/2018"},
                        {designation: "Tech Lead",Experience: "6+",location :"Chennai","skills":"HTML5,css3,React",postedDate:"06/24/2018"},
                        {designation: "Tech Arch",Experience: "10+",location :"Bengaluru","skills":"Mangerial skiils,React",postedDate:"06/24/2018"},
                        {designation: "Analyst",Experience: "2-4",location :"Chennai","skills":"HTML5,css3,React",postedDate:"06/24/2018"},
                        {designation: "Specialist",Experience: "4-6",location :"Hyderabad","skills":"HTML5,css3,React",postedDate:"06/24/2018"},
                        {designation: "Tech Lead",Experience: "6+",location :"Chennai","skills":"HTML5,css3,React",postedDate:"06/24/2018"},
                        {designation: "Tech Arch",Experience: "10+",location :"Bengaluru","skills":"Mangerial skiils,React",postedDate:"06/24/2018"}
                        
                      ];
    var arr = [];
    Object.keys(numbers).forEach(function(key) {
      arr.push(numbers[key]);
    });                 
    return (
      <div className="container margin-top-xl jobsearchBox">
      <div className="row">
      {arr.map(item => <MyAppChild designation={item.designation} Experience={item.Experience} location={item.location} skills={item.skills}  postedDate={item.postedDate}/>)}
      </div>
      </div>);
    }
}

class MyAppChild extends React.Component {
  render() {
    return (
      <div className="col-md-3">
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