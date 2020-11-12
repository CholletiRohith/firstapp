import React from 'react';
import logo from './logo.svg';
import './App.css';
import sukku from './IMG_20160725_220922663.jpg';
import ro from './download.png';
import r from './r.jpg';
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state ={
      favoritecolor: "red",
      newFruit: "",
      fruits: []
    }
  }
   componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 3000)
  }
deleteFruit(fruitid)
{
 
   var list = [...this.state.fruits];
   list = list.filter(item => item.id  !== fruitid);
   //list.pop(deletedFruitObj);
   this.setState({
     fruits:list
   })
 
}
  setValuetoState(value)
  {
    this.setState({
      newFruit: value
    })
  }
   updateFruit(newFruit) {
     if(newFruit.length > 0){
    var list = [...this.state.fruits];
    var newFruitObj = {
      id : Date.now(),
      newFruit : newFruit,
      isDone : false
    }
    list.push(newFruitObj);
    this.setState({
      fruits: list,
      newFruit:""
    });
  }
  }
    render()  
      {
   return (
          <div className="App">
      <div className="logo">
      <img src={r} className="sukkuimg" alt="logo" />
      </div>
      <header className="head">Fruits to buy</header>
      <div className="textbox">
        <input type="textbox" className="text" placeholder="Enter Your Fruit to Buy"
        value= { this.state.newFruit}
    onChange={e=> this.setValuetoState(e.target.value)} 
    ></input>
        <button className="button" onClick= {() =>this.updateFruit(this.state.newFruit)}>Add</button>
        <button className="button" onClick= {this.updateFruit.bind(this,this.state.newFruit)}>Add</button>
      </div>
      <br/>
      <br/>
   <p>t{this.state.favoritecolor}</p>
      <br/>
      <div className="list">
      <h2>List of Fruits you added in the cart:{this.state.fruits.length}</h2>
        <ul>
  
          {this.state.fruits.map(item => {
            return(
              
                <li key= {item.id}>{item.newFruit}
                <button className="button" onClick= {()=>this.deleteFruit(item.id)}>Delete</button>
                </li>
              
            );
            
          })}          
         
          
         
        </ul>
      </div>
  </div>);
      }
    
  }

export default App;
