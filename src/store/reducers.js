import * as actions from './actions';

// nous avons un state de cette forme
//  {
//    todos: [],
//    filter: ''
//  }
// todos contient un tableau de todo qui ont cette forme
//  {
//    name: '',
//    done: true
//  }

export const todosReducer = (state, action) => {
    switch(action.type) {
        case actions.ADD_TODO : {
            return {
                ...state,// copie toutes les propriétés du state courant avec l'opérateur spread
                todos: [ ...state.todos, action.todo ]//copie tous les éléments du state.todos et ajout todo
            }
        }
        case actions.DELETE_TODO : {
            return {
                ...state,
                todos: state.todos.filter( (t, i) => i !== action.index )
            }
        }
        case actions.SET_FILTER : {
            return {
                ...state,
                filter: action.filter
            }
        }
        case actions.TOGGLE_TODO : {
            return {
                ...state,
                todos: state.todos.map( (t, i) => {
                    if (i === action.index) {
                        t.done = !t.done
                    }
                    return t;
                })
            }
        }
        // si aucune action n'est identifiée on retourne par défaut le state courant
        default: {
            return state
        }
    }
}