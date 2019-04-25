import * as actions from './actions';
import { combineReducers } from 'redux';

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

const todos = (state = [], action) => {
    switch(action.type) {
        case actions.ADD_TODO : {
            return {
                todos: [ ...state.todos, action.todo ]//copie tous les éléments du state.todos et ajout todo
            }
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

const filter = (state = actions.visibilityFilters.SHOW_ALL, action) => {
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

// c'est uniquement todosReducer qui sera récupéré par le store et il comprend l'intégralité des différents effets
// des différentes actions

export const todosReducer = combineReducers({ todos, filter}) 