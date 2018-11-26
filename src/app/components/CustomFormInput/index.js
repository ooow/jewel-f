import React, { Component } from 'react';

/**
 * A view component which displays the project logotype.
 */
class CustomFormInput extends Component {
  render() {
    const {
      id, icon, children, ...attributes
    } = this.props;
    return (
      <div id={id} className='form-control custom-input'>
        <div className='form-inline flex-nowrap'>
          <div className='mr-2'>{icon}</div>
          <input {...attributes} className='custom-input-no-style w-100' />
          {children}
        </div>
      </div>
    );
  }
}

export default CustomFormInput;
