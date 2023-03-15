const initial=0

export function reducerfun(state=initial,action){

    switch(action.type){
        case "increment" :return state+1;
        default : return state;
    }
}