import React from 'react';
import './item-add-form.css';

export default class ItemAddForm extends React.Component {
    render() {
        const { onAdd } = this.props;

        return (
            <button type="button" className="btn btn-info add-button" onClick={() => {
                onAdd('Hello');
            }}>Add List</button>
        );
    }
}
