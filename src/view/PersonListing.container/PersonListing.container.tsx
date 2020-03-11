import React, { Component } from "react";
import { Person } from '../../entity/Person';
import './PersonListing.container.css';
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
            persons : [new Person("n", 4, "j", "k")],
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
    };

    render(){
        return(
            <div>
                <div className="Container">
                    <h2 className="Title">Create your account</h2>

                    <input className="Input" type="text" placeholder="Name" onChange={event => this.setState({name: event.target.value})}/>
                    <input className="Input" type="number" placeholder="Age" onChange={event => this.setState({age: parseInt(event.target.value)})}/>
                    <input className="Input" type="text" placeholder="Adress" onChange={event => this.setState({adress: event.target.value})}/>
                    <input className="Input" type="text" placeholder="Email" onChange={event => this.setState({email: event.target.value})}/>

                    <button className="AddButton" onClick={() => this.addPersonHandler()}>Add Person</button>
                </div>

                <ul>
                    {
                        this.state.persons.map((per, index) =>{
                            return(
                                <li  key={index+(new Date()).getTime()}>

                                        <h4 >{per.name}</h4>
                                        <p className="ItemInfo"> Age: {per.age} </p>
                                        <p className="ItemInfo"> Adress: {per.adress} </p>
                                        <p className="ItemInfo"> Email: {per.email} </p>
                       
                                    <button className="ItemButton" onClick={() => this.deletePersonHandler(index)}>Delete</button>
                                    <button className="ItemButton" onClick={() => this.updatePersonHandler(index)}>Update</button>
                                </li>
                                );
                        })
                    }
                </ul>
            </div>
        );
    }
}

