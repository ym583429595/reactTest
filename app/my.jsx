import React from 'react';
import ReactDOM from 'react-dom';

var Add=React.createClass({
	add(){
		console.log(this.in)
		this.props.fadd(this.in.value)
		document.querySelector('.ad').value=''
	},
	render(){
		return(
			<div>
				<input type="text" placeholder='enter task' className='ad' ref={el=>this.in=el}/>
				<button onClick={this.add}>add</button>
			</div>
		)
	}
})
var List=React.createClass({
	render(){
		return(
			<ul>
				{this.props.list.map(function(item,index){
					return <li key={index}>{item}</li>
				})}
			</ul>
		)
	}
})
var Fir=React.createClass({
	getInitialState(){
		return {
			list:['123','s']
		}
	},
	add(l){
		console.log(l)
		this.state.list.push(l);
		this.setState({
			list:this.state.list
		})
	},
	render(){
		return(
			<div>
			<Add fadd={this.add}></Add>
			<List list={this.state.list}></List>
			</div>
		)
	}
})

ReactDOM.render(
	<Fir></Fir>
	,document.querySelector('#demo'))