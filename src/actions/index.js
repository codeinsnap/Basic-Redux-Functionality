//This is a basic function folder in which we tell what to do 
// so here we have to function one is for increment and secondone is for decrement of the number


export const incNumber = ()=>{
    return {
        type: "INCREMENT"
    }
};

 export const decNumber = ()=>{
    return {
        type: "DECREMENT"
    }
};