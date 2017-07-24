import React from 'react';
import ReactDOM from 'react-dom';


var R =React.createClass({
	getInitialState:function(){
		return {
			n:true,
			num:150
		}
	},
	cha:function(e){
		console.log(e)
		this.setState({
			n:!this.state.n
		})
	},
	nums:function(){
		console.log(this.refs.tex.value.length)
		this.setState({
			num:150-this.refs.tex.value.length
		})
	},
	render(){
		return (<div>
			<div className="panel">
				<textarea ref='tex' name="" onChange={this.nums} cols="30" rows="10"></textarea>
				<div>
					<span>{this.state.num}</span>
				</div>
			</div>
				<input type='text'  onChange={this.cha}/>
				<input type='text'  value={this.state.n}/>
			{this.state.n?'12313':'abcss'}
			<ul>
				<li style={{'color':'red'}}>my list</li>
				{
					this.props.arr.map(function(item,index){
						return <li className='red'>{index }=={item}</li>
					})
				}
			</ul>
			</div>)
	}
})
var what={
	a:'acss',
	b:'swwa',
	arr:['1','2','211','231','asd','221ac','nhj','21sa','scy']
}
ReactDOM.render(
	<R {...what} />,document.getElementById('demo'))