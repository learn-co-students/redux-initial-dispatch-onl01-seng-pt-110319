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
// Because changeState() now has a default argument, the state argument is set to { count: 0 }.

// When changeState() executes, the switch statement executes the default case, returning the value of state. 
// The code changeState(undefined, { type: '@@INIT' }) returns { count: 0 },

// In dispatch(), when the changeState() reducer returns, dispatch assigns the return value to state, thus 
// updating our state to the initial value of { count: 0 }. On the next line, render() is called, displaying 0 in our HTML.

// Essentially, we take advantage of our state starting off as undefined, and never being undefined again. 
// This means the reducer's default argument can be used to set up the initial state and never be used again.

// Summary
// We learned that by dispatching an initial action of type '@@INIT' we get two benefits: an initial rendering
//  of the state, and the ability to set our initial state in our reducer. We set our initial state in our reducer 
//  by using a default argument for the state parameter. Because state is not initially defined, dispatching an action
//   assigns our state to that default value, and then sets state as the default.