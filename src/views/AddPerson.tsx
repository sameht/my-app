import React, { Component } from 'react';
import { Person } from '../entity/Person';

interface State {
    name: string
    age: number
    adress: string
    email: string
}


interface Props {
    onPersonCreate: (Person: Person) => void
}

export class AddPerson extends Component<Props, State> {
    constructor(props: any){
        super(props);

        this.state = {
            name : "",
            age : 0,
            adress : "",
            email : ""
        }
    }



    render(){
        return(
            <div className="Container">
                <h2 className="Title">Create your account</h2>

                <input className="Input" type="text" placeholder="Name" onChange={event => this.setState({name: event.target.value})}/>
                <input className="Input" type="number" placeholder="Age" onChange={event => this.setState({age: parseInt(event.target.value)})}/>
                <input className="Input" type="text" placeholder="Adress" onChange={event => this.setState({adress: event.target.value})}/>
                <input className="Input" type="text" placeholder="Email" onChange={event => this.setState({email: event.target.value})}/>

                <button className="AddButton" onClick={() => this.props.onPersonCreate(new Person(this.state.name, this.state.age, this.state.adress, this.state.email))}>Add Person</button>
            </div>
        )
    }
}