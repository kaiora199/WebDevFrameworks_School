import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
    this.ciggies = this.ciggies.bind(this)
    this.beer = this.beer.bind(this) 
    this.coffee = this.coffee.bind(this) 
    this.toffee = this.toffee.bind(this)  
  }

  ciggies(){
    this.setState({items: [...this.state.items, {id:5,value:"Cigarettes",qty:1,unit:"pkt"}]})
  }
  beer(){
    this.setState({items: [...this.state.items, {id:6,value:"Beer",qty:1,unit:"btl"}]})
  } 
  coffee(){
    this.setState({items: [...this.state.items, {id:7,value:"Coffee",qty:1,unit:"pkt"}]})
  } 
  toffee(){
    this.setState({items: [...this.state.items, {id:8,value:"Toffee",qty:3,unit:"pcs"}]})
  }

  addStuff = (description, quantity, measure) =>{
    return ()=>{
      const foundIndex = this.state.items.findIndex((element,index,array)=>{
        if(element.value === description){
          return true;
        }
        else{
          return false;
        }
      });
      if(foundIndex !== -1){
        let moreItemsArray =  [...this.state.items];
        moreItemsArray[foundIndex].qty += quantity;
        this.setState({items: moreItemsArray})
      } else{
        this.setState({items: [...this.state.items, {id:this.state.items.length +1
          ,value: description,qty: quantity,unit: measure}]});
      }

      
    }
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={this.addStuff("Cigarettes", 2, "pkt")}>Add cigarettes</button>
      <button onClick={this.addStuff("Toffee", 3, "pcs")}>Add toffee</button>
      <button onClick={this.addStuff("Coffee", 5, "pkt")}>Add coffee</button>
      <button onClick={this.addStuff("Beer", 4, "btl")}>Add beer</button>
    </div>
  }
}

export default App;