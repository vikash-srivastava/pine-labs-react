import React from 'react';

// export function Userform (props){
//     return (
//         <input placeholder={props.label} style={{background:props.color}}/>
//     )
// }

export class Userform extends React.Component {
    constructor() {
        super();
        this.state = {
            fname: 'Pariwesh1'
        }
    }//ES6
    save(event){
        console.log(this.state.fname);
    }
    // save = (event) =>{
    //     console.log(this.state.fname);
    // }
    render() {
        return (
            <div>
                <input value={this.state.fname} onChange={(event) => {
                    console.log(this.state.fname);
                    // this.state.fname = event.target.value;  //this will not work
                    this.setState({  //to rerender, call setState
                        fname:event.target.value
                    });
                    console.log(event);
                }} placeholder={this.props.label} style={{ background: this.props.color }} />
                {/* <input placeholder='Last Name' style={{ background: this.props.color }} /> */}

                <button onClick={this.save=this.save.bind(this)}>Save</button>
            </div>
        )
    }
}