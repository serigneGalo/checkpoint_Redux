import React, {  useState } from "react";
import { connect } from "react-redux";
import { addTodos, removeTodos, updateTodos,completeTodos } from "../JS/Reducers/reducer";


const mapStateToProps=(state)=>{
    return{
        todos:state,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addTodo:(obj)=>dispatch(addTodos(obj)),
        removeTodo:(id)=>dispatch(removeTodos(id)),
        updateTodo:(obj)=>dispatch(updateTodos(obj)),
        completeTodo:(id)=>dispatch(completeTodos(id))

    }
}

const Todos=(props)=>{

    const [todo,setTodo]= useState("");



    const handleChange=(e)=>{

        setTodo(e.target.value);
    }
//console.log("props from store", props);

    return(
        <div>
           <input type="text" 
           className="todo-input" 
           onChange={(e)=>handleChange(e)}/>
           
           <button className="add-btn" 
           onClick={()=>props.addTodo({
               id:Math.floor(Math.random()*1000),
               item:todo,
               completed:false
                })
            }>add</button>
            <br/>

            

        </div>
    )
}
//to connect redux store with this component
export default connect(mapStateToProps,mapDispatchToProps)(Todos);