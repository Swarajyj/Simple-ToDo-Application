import React from "react"
import '../assets/background.css';
class SearchBar extends React.Component{

    state = {
        listvalue: ''
    }
    
    setValue(event)
    {
        this.setState({listvalue :event.target.value});
        
    }
    afterAddClick=(event)=>{
        event.preventDefault();
        var value=this.state.listvalue;
        this.props.addListValue(value);
        this.setState({listvalue:''});

    }
    render()
    {

        return(
        <div>
            <form>
            <input className="addInputTextBox" type="text" placeholder=" Enter your task here"  size="45"  onChange={this.setValue.bind(this)} value={this.state.listvalue}/><br></br>
            <button type="submit" className="addButton" onClick={this.afterAddClick}>ADD</button>
            <hr></hr>
            </form>
        </div>
        );
    }
}
export default SearchBar;