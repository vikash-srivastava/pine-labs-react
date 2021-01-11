import React from 'react';
import { BackendService } from '../../backend-service';
import './userform.css';
export class Userform extends React.Component {//MVC
    constructor() { 
        super();
        this.state = { 
            user: {
                fname: 'Vikash',
                lname: 'Srivastava',
                age: 32,
                salary:20000,
                gender: 'M'
            },
            users: [],
            roles: []
        }
        BackendService.loadUser().done((response)=>{
            console.log("load user success");
            this.setState({
                users: response
            }); 
        }).fail((response)=>{
            console.log("load users failed");           
        });
        BackendService.loadRoles().done((response)=>{
            console.log("load roles success");
            this.setState({
                roles: response
            }); 
        }).fail((response)=>{
            console.log("load roles failed");           
        });
    }
    save = (event) => {
        BackendService.saveUser(this.state.user,
            (response)=>{
                console.log(response);
                //this.state.users.push(this.state.user); 
                this.setState({ //to render on UI, always set state through setState method
                    users: [...this.state.users, response]
                    //users: this.state.users;
                });
            }).fail((error)=>{
                console.log("Oops!!! something went wrong.", error);
            });        
    }
    handleEvent = (event) => {
        this.setState({  
            user: Object.assign(this.state.user, { [event.target.name]: event.target.value })
        });
    }
    deleteUser = function(index, userId)  {
        const decision = window.confirm('Are you sure??');
        if(!decision){
            return;
        }
        BackendService.deleteUser(userId, (response) => {
            this.state.users.splice(index, 1);
            this.setState({
                users: this.state.users 
            });                                   
        }).fail((response)=>{
            console.log("Oops!!! Something went wrong", response);
        });
        console.log(decision);
        console.log(this); 
        //console.log(index, secodnArg);
        
    }

        
    render() {
        const userModel = this.state.user;
        return (
            <div onLoad={this.loadUser}>
                <input value={userModel.fname} name='fname' onChange={this.handleEvent} placeholder={this.props.label} style={{ background: this.props.color }} />
                <input value={userModel.lname} name='lname' onChange={this.handleEvent} placeholder={this.props.label} style={{ background: this.props.color }} />
                <input value={userModel.age} name='age' onChange={this.handleEvent} placeholder='Age' style={{ background: this.props.color }} />
                <input value={userModel.salary} name='salary' onChange={this.handleEvent} placeholder='salary'></input>
                <input value='M' name='gender' onChange={this.handleEvent} type="radio" />Male
                <input value='F' name='gender' onChange={this.handleEvent} type="radio"/>Female
                <div>Role : 
                    {this.state.roles.map( (role) =>{
                        return <div><input value={role} name='role' onChange={this.handleEvent} type="radio"/>{role}</div>
                    })
                    }                   
                 </div>   
                <button onClick={this.save}>Save</button>
                <table>
                    <thead >
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th> Age</th>
                        <th> Salary</th>
                    </thead>
                    <tbody>
                        {this.state.users.map( (user, index)=> {
                            return <tr>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.age}</td>
                                <td>{user.salary}</td>
                                <td>{user.gender}</td>
                                <td>{user.role}</td>
                                <td><button onClick={this.deleteUser.bind(this, index, user.id)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}