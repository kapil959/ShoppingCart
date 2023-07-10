var state1 = {
    name : "kapil",
    surname: "mishra",
    count : 0
};

const reducer = (state = state1 , action) => {
    switch(action.type) {
       case "INCREMENT":
         return increment(state, action );
       case "DECREMENT":
         return increment(state, action );
      case "Name": 
        return increment(state, action);
      default:
        return state;
     }
  };

  const increment = (state, action) =>{
      var stateCopy = {...state};
      if(action.type == "INCREMENT"){
        stateCopy.count += action.payload;
      }else if(action.type == "DECREMENT"){
        stateCopy.count -= action.payload;
      }{
        stateCopy.name = action.payload;
      }
      console.log(stateCopy);
      return stateCopy;

  };
  export default reducer;