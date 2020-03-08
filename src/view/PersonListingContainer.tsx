import React, { Component } from "react";
import { Person } from '../entity/Person';

interface State {
    persons: Person[]
    name: string
    age: number
    adress: string
    email: string
}

export class PersonListingContainer extends Component<any, State> {

    constructor(props: any){
        super(props);

        this.state = {
            persons : [],
            name : "",
            age : 0,
            adress : "",
            email : ""
        }
    }

    addPersonHandler(){
        let p = this.state.persons;
        p.push(new Person(this.state.name, this.state.age, this.state.adress, this.state.email));
        this.setState({persons: p});
        console.log(this.state.persons);
    }

    deletePersonHandler(index: number){
        let persons = this.state.persons;
        persons.splice(index, 1);
        this.setState({persons: persons});
    }

    updatePersonHandler(index: number){
    let persons = this.state.persons;
    persons[index].name = this.state.name;
    persons[index].age = this.state.age;
    persons[index].adress = this.state.adress;
    persons[index].email = this.state.email;
    this.setState({persons: persons})
    }

    render(){
        return(
            <div>
                <div className="addPerson">
                    <div>
                        <label>Name: </label>
                        <input type="text" placeholder="Name" onChange={event => this.setState({name: event.target.value})}/>
                    </div>
                    <div>
                        <label>Age: </label>
                        <input type="number" placeholder="Age" onChange={event => this.setState({age: parseInt(event.target.value)})}/>
                    </div>
                    <div>
                        <label>Adress</label>
                        <input type="text" placeholder="Adress" onChange={event => this.setState({adress: event.target.value})}/>
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="text" placeholder="Email" onChange={event => this.setState({email: event.target.value})}/>
                    </div>
                

                    <button onClick={() => this.addPersonHandler()}>Add Person</button>
                </div>
                {
                    this.state.persons.map((per, index) =>{
                        return(
                            <div key={index+(new Date()).getTime()}>
                                <h4>{per.name}</h4>
                                <p>Age: {per.age} Adress: {per.adress} Email: {per.email} </p>

                                <button onClick={() => this.deletePersonHandler(index)}>Delete</button>
                                <button onClick={() => this.updatePersonHandler(index)}>Update</button>
                            </div>
                            );
                    })
                }
            </div>
        );
    }

}