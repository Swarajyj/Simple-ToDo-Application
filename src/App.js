import React from 'react';
import SearchBar from './component/SearchBar'
import List from './component/List'
import './assets/background.css';

class App extends React.Component{
 state={
   todolist: []
 }
addListValue = (listvalue) =>{
 
  var newtodolist=[...this.state.todolist];
  newtodolist.push(listvalue);
  this.setState({todolist: newtodolist})
}
deleteListValue =(index) =>{
  var newToDoList=[...this.state.todolist];
  newToDoList.splice(index,1);
  this.setState({todolist:newToDoList});
}
updateListValue =(index,listvalue) =>{
  const newToDoList=[...this.state.todolist];
  newToDoList[index]=listvalue;
  this.setState({todolist:newToDoList});
}


  render(){
    return (
      <div className="backGround">
        <h1 className="heading">TODO LIST</h1>
        
        <br>
        </br>
       
        <SearchBar addListValue={this.addListValue}/>

        {this.state.todolist.map((listvalue,index)=>{
         return <div><List key={index} listvalue={listvalue} index={index} delete={this.deleteListValue} update={this.updateListValue}/><br></br></div>

        })}
  
  
        
        
        
      </div>
    );
  }
}



export default App;
