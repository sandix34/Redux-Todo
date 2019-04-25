import React from 'react';
import { connect } from 'react-redux';
import {setFilter, visibilityFilters } from '../store/actions';

const Filter = ({ dispatch }) => {
    return (
       <> 
        <button 
        className="btn btn-primary mr-2" 
        onClick={ () => dispatch(setFilter(visibilityFilters.SHOW_ALL)) } 
        >Tout</button>
        <button  
        className="btn btn-primary mr-2"
        onClick={ () => dispatch(setFilter(visibilityFilters.SHOW_DONE)) }
        >Fini</button>
        <button 
        className="btn btn-primary"
        onClick={ () => dispatch(setFilter(visibilityFilters.SHOW_ACTIVE)) }
        >En cours</button>
       </> 
    )
}

export default connect()(Filter); 