import React from 'react';

const WithChildren = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props} >
        { fn }
      </Wrapped>
    );
  };
};

export default WithChildren;
