import React from 'react';

const AddTodo = (props) => {
    return (
        <div ClassName="d-flex mb-4">
          <input type="text" className="form-control mr-5"/>
          <button className="btn btn-success m-1">Ajouter</button>
        </div>
    )
}

export default AddTodo;