import React from 'react';
import { Component } from 'react';
import Form from '../containers/FormContainer.js';
import Table from '../components/TableComponent.js';

class ItemsComponent extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchItem();
  }

  render () {
    const { items, addItem, removeItem } = this.props;
    const fields = [
      'No.',
      'Title',
      'Content',
      'Completed',
      'Category',
      'Sub Category',
      'Url',
      'Created At',
      'Author',
      'Recommended By'
    ];
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <h3>
              Item List
            </h3>
          </div>
        </div>
        <Form onSubmit={addItem} fieldType="item"/>
        <Table
          items={items}
          fields={fields}
          type="items"
          clickHandler={removeItem}
        />
      </div>
    )
  }
}

export default ItemsComponent;
