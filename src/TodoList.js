import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
import store from './store'
import { changeInputAction, addItemAction, removeItemAction } from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.addItem = this.addItem.bind(this)
    store.subscribe(this.storeChange)
    
  }

  render() { 
    return ( 
      <div style={{margin:'10px'}}>
        <div >
        <Input placeholder={this.state.inputValue} style={{width:'250px',marginRight:'10px'}}
        onChange={this.changeInputValue}
        value={this.state.inputValue}/>

        <Button type="primary" onClick={this.addItem}>添加</Button>
        </div>
        <div style={{marginTop:'10px',width:'300px'}}>
          <List bordered
            dataSource={this.state.list}
            renderItem={(item, index)=>(<List.Item onClick={this.removeItem.bind(this,index)}>{item}</List.Item>)}
          ></List>
        </div>
      </div>
     );
  }
  storeChange() {
    this.setState(store.getState())
  }
  changeInputValue(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  
  addItem() {
    const action = addItemAction()
    store.dispatch(action)
  }
  removeItem(index) {
    const action = removeItemAction(index)
    store.dispatch(action)    
  }
}
 
export default TodoList;