import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class ListDiary extends Component{
    state ={
        user:{
            U_name : "Hello",
            U_pass : "password",
            U_email : "email",
            U_myDiary : [
                    {
                        D_id : "01",
                        D_auther : "sank",
                        D_name : "Journal",
                        D_object : [
                            {
                                obj_id: 0,
                                pos : {x:1,y:1},
                                type : "chat",
                                data: {Name:"eiei",data:[]}
                            }
                        ]
                    },
                    {
                        D_id : "02",
                        D_auther : "sank",
                        D_name : "Journal2",
                        D_object : [
                            {
                                obj_id: 0,
                                pos : {x:1,y:1},
                                type : "chat",
                                data: {Name:"eiei",data:[]}
                            }
                        ]
                    },
                    {
                        D_id : "03",
                        D_auther : "sank",
                        D_name : "Journal3",
                        D_object : [
                            {
                                obj_id: 0,
                                pos : {x:1,y:1},
                                type : "chat",
                                data: {Name:"eiei",data:[]}
                            }
                        ]
                    }

            ]
        },
        Diary : {

        }
    };

    UpdateStore(Val){
        this.props.edite_state.bind(this,{Diary:Val});
    }

    render(){
    
        return (
            <div className="card">
                <div className="card-header">
                    <h5>
                        My Diary
                        <div className="float-right">
                            <Link to={
                                        {
                                            pathname:'/editDiary' , 
                                            Diary:                     
                                                {
                                                    D_id : "",
                                                    D_auther : "",
                                                    D_name : "",
                                                    D_object : []
                                                }
                                        }
                                     }
                                     onClick={this.props.edite_state.bind(this,{Diary:
                                        {
                                        D_id : "",
                                        D_auther : "",
                                        D_name : "",
                                        D_object : []
                                        }
                                     })}
                                     >
                                <span className="fas fa-plus"></span>Add  
                            </Link>
                        </div>
                    </h5>
                </div>
                <div className="card-body">
                    {
                        this.state.user.U_myDiary.map((item,i)=>{
                            return(
                                <div>
                                    <Link to={
                                        {
                                            pathname:'/editDiary' , 
                                            Diary:item
                                        }
                                    }
                                        onClick={  this.props.edite_state.bind(this,{Diary:item})} 
                                    >
                                        <span className="fas fa-file" ></span>
                                        <label>{item.D_name}</label> 
                                    </Link>
                                </div>
                            );
                        })
                    }
                
                    
                </div>
                <div className="card-footer">
                    <div className="float-right">
                        <button className="btn btn-danger float-right" onClick={()=>{}}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
      valFromStore : state.Diary
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      edite_state:(val)=>{
        return dispatch({type:'update_state',payload:val});
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ListDiary);