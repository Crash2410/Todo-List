import React from 'react';
import './item-add-form.css';

export default class ItemAddForm extends React.Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({
            label: ' '
        })
    };

    render() {

        return (
            <form className="add-new-list d-flex" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className='form-control'
                    onChange={this.onLabelChange}
                    placeholder='What needs to be done'
                    value={this.state.label} />
                <button
                    className="btn btn-outline-secondary"
                >Add List</button>
            </form>
        );
    }
}
