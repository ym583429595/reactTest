
import React from 'react';
import ReactDOM from 'react-dom';
var Ul=React.createClass({
	render:function(){
		return (
				<ul>
					{console.log(this.props.todo)}
					{ this.props.todo.map(function(item,index){
						return (<li >
						<input type='checkbox' name={index+'todo'} defaultChecked={item.isDown}/>
						<span>{item.text}</span>
						</li>)
					})
				}
					
				</ul>
			)
	}
})
var Ck=React.createClass({
	keyup:function(e){
		if(e.keyCode==13){
			var newck={}
			newck.text=e.target.value
			newck.isDown=false

			this.props.add(newck)
			e.target.value=''
		}
	},
	render:function(){
		return (
				<div>
					<input type='text' placeholder='input text' onKeyUp={this.keyup}/>
					<button >sub</button>
				</div>
			)
	}
})
	
var Todos=React.createClass({
		add:function(ck){
			this.state.todos.push(ck);
			this.setState({
				todos:this.state.todos
			})
		},
	getInitialState:function(){
		return {
			todos:[
				{text:'6 dian qichuangqi ',isDown:false},
				{text:'7  qichuangqi ',isDown:true},
				{text:'8 dchuangqi ',isDown:false},
				{text:'9 dian qgqi ',isDown:false},
				{text:'0 i ',isDown:false},
				{text:'11 dw12ian qichuangqi ',isDown:false},
				{text:'62 diwdwdwqdqan qichuangqi ',isDown:true},
			],
			allChecked:false
		}
	},
	render:function(){
		return (
			<div>
			 <Ck add={this.add}/>
			<Ul todo={this.state.todos}/>
			
			</div>
			)
	}
})

ReactDOM.render(<Todos/>,document.getElementById('demo'))

