import React from 'react';

// eslint-disable-next-line arrow-body-style
export const LinkField = (props) => {
  const { value,
    LinkObject
  } = this.props;

  return (
    <div>
      <input className="link" $AttributesHTML style={{ display: 'none' }} />

      {value &&
        <div>
          <button href="#" className="linkfield-button btn btn-primary">Edit</button>
          <button href="#" className="linkfield-remove-button btn btn-danger">Remove</button>
        </div>
      } else {
        <button href="#" className="linkfield-button btn btn-primary font-icon-plus-circled">Add Link</button>
      }

      <div className="linkfield-dialog" />
    </div>
  );
};
