import React, { Component } from "react";
import { Person } from '../../entity/Person';
import './PersonListing.container.css';
import { AddPerson } from '../AddPerson';
import { PersonTable } from '../PersonTable';

interface State {
    persons: Person[]
}


export class PersonListingContainer extends Component<any, State> {

    constructor(props: any){
        super(props);

        this.state = {
            persons : [new Person("n", 4, "j", "k")],
        }
    }

    addPersonHandler(person: Person){
        let p = this.state.persons;
        p.push(person);
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
/*        persons[index].name = this.state.name;
        persons[index].age = this.state.age;
        persons[index].adress = this.state.adress;
        persons[index].email = this.state.email;
        this.setState({persons: persons})*/
    };

    render(){
        return(
            <div>
                <AddPerson onPersonCreate={(person)=> this.addPersonHandler(person)}/>
                <PersonTable persons={this.state.persons} EditPerson={(index) => console.log("edit")} DeletePerson={(index) => this.deletePersonHandler(index)}/>
            </div>
        );
    }
}

