import React, {Component} from 'react'
import { Person } from '../entity/Person'
interface Props {
    persons : Person[]
    DeletePerson : (index: number) => void
    EditPerson : (index: number) => void
}
export class PersonTable extends Component<Props>{
    constructor(props: Readonly<Props>) {
        super(props);

    }
    render(){
        return(
            <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Adress</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>

                  {this.props.persons.length > 0 ? (
                    this.props.persons.map((person, index) => (
                      <tr key={index}>
                        <td>{person.name}</td>
                        <td>{person.age}</td>
                        <td>{person.adress}</td>
                        <td>{person.email}</td>
                        <td>
                          <button onClick={() => this.props.EditPerson(index)} className="button muted-button">Edit</button>
                          <button onClick={() => this.props.DeletePerson(index)} className="button muted-button">Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3}>No users</td>
                    </tr>
                  )}
                </tbody>
              </table>
        )
    }
}