import React from 'react';
import './userform.css';
export class Userform extends React.Component {//MVC
    constructor() { //only one 
        super();
        this.state = { //model
            user: {
                fname: 'Pariwesh1',
                age: 30,
            },
            users: []
        }
    }//ES6
    save = (event) => {
        // this.state.users.push(this.state.user);
        this.setState({  //to rerender, call setState
            users: [...this.state.users, Object.assign({}, this.state.user)]
        });
    }
    handleEvent = (event) => {
        this.setState({  //to rerender, call setState
            user: Object.assign(this.state.user, { [event.target.name]: event.target.value })
        });
    }
    deleteUser = function(index, secodnArg)  {
        const decision = window.confirm('Are you sure??');
        if(!decision){
            return;
        }
        console.log(decision);
        console.log(this); 
        console.log(index, secodnArg);
        this.state.users.splice(index, 1);
        this.setState({
            users: this.state.users 
        })
    }
    render() {
        const userModel = this.state.user;
        return (
            <div>
                <input value={userModel.fname} name='fname' onChange={this.handleEvent} placeholder={this.props.label} style={{ background: this.props.color }} />
                <input value={userModel.age} name='age' onChange={this.handleEvent}
                    placeholder='first Name copy' style={{ background: this.props.color }} />
                <input placeholder='salary' value={userModel.salary} onChange={this.handleEvent} name='salary'></input>
                <button onClick={this.save}>Save</button>
                <table>
                    <thead >
                        <th>First Name</th>
                        <th> Age</th>
                        <th> Salary</th>
                    </thead>
                    <tbody>
                        {this.state.users.map( (user, index)=> {
                            console.log(index);
                            return <tr>
                                <td>{user.fname}</td>
                                <td>{user.age}</td>
                                <td>{user.salary}</td>
                                <td><button onClick={this.deleteUser.bind(this, index, 34)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}