//in this file we tells how to do the task
//so we have written a function of increment of number by 1 and same as for decrement


const initialState = 0;

const changeNumber =( state = initialState, action)=>{
    switch (action.type) {
        case "INCREMENT" : return state + 1;
        case "DECREMENT" : return state - 1; 
        default: return state;
    }

}

export default changeNumber;