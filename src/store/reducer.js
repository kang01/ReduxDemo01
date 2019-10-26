import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM } from './actionTypes'

const defaultState = {
  inputValue: 'Write Something',
  list: [
    '早上8点开晨会，分配今天的代码任务',
    '早上9点和项目经理开需求沟通会',
    '早上10点开晨会，分配今天的代码任务'
  ]
}
export default (state = defaultState, action) => {

  
  // Reducer里只能接受state，不能改变state
  // switch(action.type) {
  //   case 'changeInput':
  //     let newState = JSON.parse(JSON.stringify(state))
  //     newState.inputValue = action.value
  //     return newState
  //     break

  //   case 'addItem':
  //     break
  // }
  if(action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === REMOVE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }

  return state
}