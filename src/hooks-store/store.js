//managing state globally with react
import { useState, useEffect } from "react";

let globalState = {}; 
let listeners = []; //to listen to component changes across the app
//listener -> array of functions -> updates to global state
let actions = {}; 

//create a custome hook 
export const useStore = (shouldListen = true) => {
    const setStateValue = useState(globalState)[1] //makes components to re render 

    const dispatch = (actionId, payload) =>{ // payload = prod id 
     const newstate =  actions[actionId](globalState, payload) //return a new state
     globalState = {...globalState, ...newstate}
      
        for (const listener of listeners){
            listener(globalState) //this will re render the component that is changing its state
        }
    }

    useEffect(() => {
        if(shouldListen){
            listeners.push(setStateValue);
        }

    return () => {

        listeners = listeners.filter(list => list !== setStateValue)

    }//this is ran whenever the component is removed from the dom 
    }, [setStateValue, shouldListen]) //only runs for the component that uses the hook when the component renders 

    return [globalState, dispatch]
}

export const initStore = (userActions, initialState) => {
    if(initialState){
        globalState = {...globalState, ...initialState}
    }

    actions = {...actions, ...userActions}
}