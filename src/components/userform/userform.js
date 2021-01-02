import React from 'react';

// export function Userform (props){
//     return (
//         <input placeholder={props.label} style={{background:props.color}}/>
//     )
// }

export class Userform extends React.Component {
    save(event){
        console.log(event);
    }
    render() {
        return (
            <div>
                <input placeholder={this.props.label} style={{ background: this.props.color }} />
                <input placeholder='Last Name' style={{ background: this.props.color }} />
                {/* <button onClick={(event)=>{
                    console.log(event);
                }}>Save</button> */}
                 <button onClick={this.save}>Save</button>
            </div>
        )
    }
}