import React from 'react';
import Student from './Student';

class StudentsList extends React.Component {

    renderHeader() {
        return Object.keys(new Student()).map((key, index) => {
            return (
                <th key={index}>
                    {key.substring(1)}
                </th>
            );
        });
    }

    renderBody(students) {
        return students.map(({ carnet, name, lastname }) => {
            return (
                <tr key={carnet}>
                    <td>{carnet}</td>
                    <td>{name}</td>
                    <td>{lastname}</td>
                    <td>
                        <button  onClick={() => {this.props.onDelete(carnet)}}>Delete</button>
                    </td>
                </tr>
            );
        });
      
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            {this.renderHeader()}
                            <th> actions</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.renderBody(this.props.students)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentsList;