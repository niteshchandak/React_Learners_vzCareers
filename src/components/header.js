import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="header clearfix padding-y-md ">
                        <nav>
                            <ul className="nav nav-pills pull-right margin-top-sm">
                                <li role="presentation" className="active"><a href="#"  data-toggle="modal" data-target="#myModal">Register</a></li>
                                <li role="presentation" ><a href="#">Login</a></li>
                            </ul>
                        </nav>
                        <h3 className="text-muted">Job Portal</h3>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Header;