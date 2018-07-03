import React, { Component } from 'react';

class CardPanel extends Component {
    render() {
        return (

<div className="container margin-top-xl jobsearchBox">
<div className="row">
  <div className="col-md-3">

    <div class="panel panel-default panel-info">
      <div class="panel-heading">
        <h3 class="panel-title"><b>Analyst</b></h3>
      </div>
      <div class="panel-body">
        <p><b>Verizon Data Service</b></p>
        <ul>
          <li><span class="glyphicon glyphicon-briefcase"></span> 4-9 yrs</li>
          <li><span class="glyphicon glyphicon-pushpin"></span> Chennai</li>
        </ul>
        <p>Key Skills: <i>Angular, React, HTML5, Javascript</i></p>
      </div>
      <div class="panel-footer">
      <span>Posted: 06/24/2018 </span>
      </div>
    </div>

  </div>
</div>
</div>
        )
    }
}

export default CardPanel;