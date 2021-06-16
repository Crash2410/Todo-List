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
    };

    render() {
        const { onAdd } = this.props;

        return (
            <form className="add-new-list d-flex" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className='form-control'
                    onChange={this.onLabelChange}
                    placeholder='What needs to be done' />
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => {
                        onAdd(this.state.label);
                    }}>Add List</button>
            </form>
        );
    }
}
