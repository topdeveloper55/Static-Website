import React from 'react';

function Stream({ pages = [] }) {
  return (
    <div>
      {
        pages.map((page, key) =>
          <div className="page" key={key}>{page.name}</div>
        )
      }
    </div>
  );
}

Stream.propTypes = {
  pages: React.PropTypes.array
};

export default Stream;
