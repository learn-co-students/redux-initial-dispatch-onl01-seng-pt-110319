// let state = {count: 0};

// function changeState(state, action){
//     switch (action.type) {
//       case 'INCREASE_COUNT':
//         return {count: state.count + 1}
//       default:
//         return state;
//     }
//   }

// function dispatch(action){
//     state = changeState(state, action)
//     render()
// }

// function render(){
//     document.body.textContent = state.count
// }

let state; 

function changeState(state =  {count: 0 }, action) {

  switch(action.type) {
    case 'INCREASE_COUNT' :
      return { count: state.count + 1 }

    default: 
      return state;
  }
}

  function dispatch(action) {
    state = changeState(state,action)
    render() 
  }

  function render() {
    document.body.textContent = state.count
  }

  dispatch ({ type: '@@INIT'})
  //above calls our dispatch function with an action of @@init
  // dispatch({type: 'INCREASE_COUNT'})
//   At the top of the file, we declare but do not assign our state,
//    so it starts off undefined. Then at the bottom the file, we dispatch 
//    an action of '@@INIT'. This calls our dispatch() function, and passes 
//    it through our initial action. dispatch() calls the changeState() reducer. 
//    changeState() is executed, passing through two local variables: state and
//     action. action is defined because we passed { type: '@@INIT' } into dispatch. 
//     state is currently undefined, so, with that initial dispatch we are really calling:

// changeState(undefined, { type: '@@INIT' })