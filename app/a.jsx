import React from 'react'
import ReactDOM from 'react-dom'

var H=React.createClass({
	getInitialState(){
		console.log('initial');
		return {
			s:'ini'
		}
	},
	componentWillMount(){
		console.log('will');
	},
	componentDidMount(){
		console.log('did');
	},
	render(){
		var sty={
			color:this.props.color,
			fontSize:20
		}
		console.log(this.props.children);
		return (
				<div className="div" style={sty}>
					<div>{
						this.props.children
					}
					</div>
					<h2>{this.props.name + this.state.s}</h2>
				</div>
			)
	}
})

var Card=React.createClass({
	render(){
		var sty={
			width:300,
			height:200,
		}
		return (
			<div style={sty}>
				<Paint color={this.props.color}></Paint>
				<Col color={this.props.color}></Col>
			</div>)
	}
})
var Paint=React.createClass({
	render(){
		var sty={
			height:150,
			width:'100%',
			backgroundColor:this.props.color
		}
		return (
			<div style={sty}></div>
			)
	}
})
var Col=React.createClass({
	render(){
		var sty={
			fontSize:20,
			color:this.props.color,
			textAlign:'center',
			height:50,
			lineHeight:'50px',
			width:'100%'
		}
		return (
			<label style={sty}>ss</label>)
	}
})
//ReactDOM.render(<H name='wode' color='red'><h3><span>1</span></h3><h2>2</h2></H>,document.querySelector('#demo'))
ReactDOM.render(<Card color='#ffa737'></Card>,document.querySelector('#demo'))