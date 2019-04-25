import * as actions from './actions';


// nous avons un state de cette forme
//  {
//    todos: [], ---------> todoReducer
//    filter: '' ---------> filterReducer
//  }
// todos contient un tableau de todo qui ont cette forme
//  {
//    name: '',
//    done: true
//  }

export const todos = (state = [], action) => {
    switch(action.type) {
        case actions.ADD_TODO : {
            return  [ ...state, action.todo ]//copie tous les éléments du state.todos et ajout todo    
        }
        case actions.DELETE_TODO : {
            return state.filter( (t, i) => i !== action.index )    
        }
        case actions.TOGGLE_TODO : {
            return state.map( (t, i) => {
                    if (i === action.index) {
                        t.done = !t.done
                    }
                    return t
                })
        }
        // si aucune action n'est identifiée on retourne par défaut le state courant
        default: {
            return state
        }
    }
}

export const filter = (state = actions.visibilityFilters.SHOW_ALL, action) => {
    switch(action.type) {
        case actions.SET_FILTER : {
            return action.filter
        }
       // si aucune action n'est identifiée on retourne par défaut le state courant
       default: {
        return state
    } 
    }
}

