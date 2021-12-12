import { Component } from 'react';
import axios from 'axios';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            gender: '',
            isEdit: false,
            person: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/persons')
            .then(response => {
                this.setState({ person: response.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender
        }
        axios.post('http://localhost:3000/persons', newPerson)
            .then(res => console.log(res.data));
        this.setState({
            name: '',
            age: '',
            gender: '',
            isEdit: false
        })
    }
    editPerson = (person) => {
        this.setState({
            name: person.name,
            age: person.age,
            gender: person.gender,
            isEdit: true
        })
    }
    updatePerson = (e) => {
        e.preventDefault();
        const person = {
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender
        }
        axios.put(`http://localhost:3000/persons/${this.state.id}`, person)
            .then(res => console.log(res.data));
        this.setState({
            name: '',
            age: '',
            gender: '',
            isEdit: false
        })
    }
    deletePerson = (id) => {
        axios.delete(`http://localhost:3000/persons/${id}`)
            .then(res => console.log(res.data));
    }
    render() {
        return (
            <div>
                <h1>CRUD</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
                    <input type="text" name="age" placeholder="age" value={this.state.age} onChange={this.handleChange} />
                    <input type="text" name="gender" placeholder="gender" value={this.state.gender} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.person.map(person => {
                                return (
                                    <tr key={person.id}>
                                        <td>{person.name}</td>
                                        <td>{person.age}</td>
                                        <td>{person.gender}</td>
                                        <td>
                                            <button onClick={() => this.editPerson(person)}>Edit</button>
                                            <button onClick={() => this.deletePerson(person.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export { Person};