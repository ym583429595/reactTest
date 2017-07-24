import React from 'react'
import ReactDOM from 'react-dom'

var H=React.createClass({
	getInitialState(){
		return{
			num:0
		}
	},
	componentDidMount(){
		setInterval(this.numadd,1000)
	},
	numadd(){
		this.setState({
			num:this.state.num+100
		})
	},
	render(){
		return (<h1>{this.state.num}</h1>)
	}
})

var Light=React.createClass({
	getInitialState(){
		return{
	
		}
	},
	render(){
		var sty={
			width:300,
			height:300,
			borderRadius:10,
			backgroundColor:'black',
			color:'white',
			textAlign:'center',
			fontSize:20,
			paddingTop:100
		}
		return (
			<div style={sty}>
				<H></H>
				<h1>闪电来了</h1>
			</div>)
	}
})

ReactDOM.render(<Light />,document.querySelector('#demo'))