"use strict"

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Menu.css';


class Menu extends React.Component {
	  constructor(props) {
		super(props);
		this.state = {
			showDropDown:false
		}
	  }
	  showDropDown(e){
	  	this.setState({
	  		showDropDown: !this.state.showDropDown
	  	})
	  }
	  closeDropDown () {
	  	this.setState({
	  		showDropDown: false
	  	})
	  }
	  render() {

	  	let loginClass = (this.state.loginShow)?'':'hide';
	  	let showDropDownClass = (this.state.showDropDown)?'open':'';
	    return (
			<div>
				<nav>
					<div className="not-links">
						<h1>{this.props.pageTitle}</h1>
						<div className="hamburger" onClick={() => this.showDropDown()}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div  className={`links  ${showDropDownClass}`}>
						<Link onClick={() => this.closeDropDown()} to="/">Home</Link>
						<Link onClick={() => this.closeDropDown()} to="/Alternate">Alternate</Link>
					</div>
					
				</nav>
			</div>
	    );
	  }
}

export const mapStateToProps = state => ({
    pageTitle: state.themeReducer.pageTitle
});

export default connect(mapStateToProps)(Menu);