import React, { Component } from 'react';

class CardPanel extends Component {

  state = {
    indexOpen: -1,
    isLastindex:false,
    data: [{ designation: "Analyst", Experience: "2-4", location: "Chennai", "skills": "HTML5,css3,React", postedDate: "06/24/2018" },
    { designation: "Specialist", Experience: "4-6", location: "Hyderabad", "skills": "HTML5,css3,React", postedDate: "06/24/2018" },
    { designation: "Tech Lead", Experience: "6+", location: "Chennai", "skills": "HTML5,css3,React", postedDate: "06/24/2018" },
    { designation: "Tech Arch", Experience: "10+", location: "Bengaluru", "skills": "Mangerial skiils,React", postedDate: "06/24/2018" },
    {},
    { designation: "Tech Arch", Experience: "12+", location: "Bengaluru", "skills": "Mangerial skiils,React", postedDate: "06/24/2018" }]

  }

  setIndexOpen = (indexOpen) => {
    let isLastindex = false;
    while (indexOpen == 0 || indexOpen % 4 != 0 && !isLastindex) {
      if (indexOpen + 1 >= this.state.data.length) {
        isLastindex = true;
      }
      indexOpen++;
    }
    if (isLastindex){
      this.setState({ isLastindex: true,indexOpen:-1 })
    return;}
    this.setState({ indexOpen: indexOpen,isLastindex:false });
    
  }
  render() {
    var arr = [];
    Object.keys(this.state.data).forEach(function (key) {
      arr.push(this.state.data[key]);
    }.bind(this));

    return (
      <div className="container margin-top-xl jobsearchBox">
        <div className="row">
          {arr.map(function (item, i) {
            if (i == 0 || i % 4 != 0)
              return <MyAppChild designation={item.designation} Experience={item.Experience} index={i}
                location={item.location} setIndexOpen={this.setIndexOpen} skills={item.skills} postedDate={item.postedDate} />;

            else {
              let hideclassName = "";
              if (this.state.indexOpen === i) {
                 return <div className={"col-md-12 " + hideclassName}>2</div>
              }else{
                return null;
              }

            }
          }.bind(this)
          )}
{this.state.isLastindex?<div className={"col-md-12 "}>2</div>:""}
        </div>
      </div>);
  }
}

class MyAppChild extends React.Component {
  render() {
    return (
      <div className="col-md-3" onClick={() => { this.props.setIndexOpen(this.props.index) }}>
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