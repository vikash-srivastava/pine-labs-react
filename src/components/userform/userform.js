import React from 'react';
import './userform.css';
export class Userform extends React.Component {//MVC
    constructor() { //only one 
        super();
        this.state = { //model
            fname: 'Pariwesh1',
            age:30
        }
    }//ES6
    save = (event) =>{
        this.setState({  //to rerender, call setState
            copy:this.state.fname
        });
        console.log(this.state.fname);
    }
    handleEvent= (event) => {
        this.setState({  //to rerender, call setState
            [event.target.name]:event.target.value
        });
    }
    render() {
        return (
            <div>
                <input value={this.state.fname} name='fname' onChange={this.handleEvent} placeholder={this.props.label} style={{ background: this.props.color }} />
                <input value={this.state.age} name='age' onChange={this.handleEvent}
                 placeholder='first Name copy' style={{ background: this.props.color }} />

                <button onClick={this.save}>Save</button>
                <table>
                    <thead >
                        <th>First Name</th>
                        <th> Age</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pariwesh</td>
                            <td>30</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}