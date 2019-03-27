import React from 'react';

const WithChildren = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props} >
        { fn }
      </Wrapped>
    );
  };
};

export default WithChildren;
