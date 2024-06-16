import React from 'react';
import Student from './Student';

class StudentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { carnet: '', name: '', lastname: '' };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Manejador del evento de submit, ejecuta la funcion saveStudent
    // Pasada por props
    handleSubmit(event) {
        event.preventDefault();
        // Se necesitan validaciones de entrada
        let student = new Student(this.state.carnet, this.state.name, this.state.lastname);
        this.props.onSave(student);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    // Label + input
    // TODO: Necesita se modificado para funcionar con todos los tipos de entrada
    renderInput(name,placeholder, type = "text") {
        return (
            /* Se un fragmento React, para establecer que este código se hijo directo en el resultado */
            <fieldset>
                <label htmlFor={name}>{name}</label>
                <input
                    type={type}
                    name={name} id={name}
                    value={this.state[name]}
                    placeholder= {placeholder}
                    onChange={this.handleInputChange} />
            </fieldset>
        );
    }

    render() {
        return (
            <form id="contact" action="" onSubmit={this.handleSubmit}>
                <h3>Student Form</h3>
                {this.renderInput("carnet","00031111")}
                {this.renderInput("name","Next")}
                {this.renderInput("lastname","Aldana")}
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default StudentForm;