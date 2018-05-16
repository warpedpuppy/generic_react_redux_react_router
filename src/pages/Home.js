import React from 'react';
import './Home.css';
import {connect} from 'react-redux';
import { addItem } from '../actions/index.js';
import axios from 'axios';
import {API_BASE_URL} from '../config';

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			localCounter: "asdf"
		}
	}
	addItemHandler(){
		this.props.dispatch(addItem(5));
		let that = this;
		axios.post(`${API_BASE_URL}`)
		  .then(function (response) {
		    that.setState({
		    	localCounter: response.data.counter
		    })
		  })
		  .catch(function (error) {
		    console.log(error);
		  });



	}
	componentDidMount () {
		let that = this;
		axios.get(`${API_BASE_URL}`)
		  .then(function (response) {
		   
		    that.setState({
		    	localCounter: response.data.counter
		    })
		     console.log(response, that.state);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	render () {
		return (
			<div>
		      <h1>home</h1>
		      <button onClick={(e) => this.addItemHandler()} >click here add item</button>
		      <div>
		      array from store:  {this.props.items}
		      </div>
		       <div>
		      back end server counter:  {this.state.localCounter}
		      </div>
	      </div>
	    );
	}
    
}

export const mapStateToProps = state => ({
    items: state.listReducer.items
});

export default connect(mapStateToProps)(Home);