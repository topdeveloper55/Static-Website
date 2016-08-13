import React from 'react';

function Stream({pages = []}) {
	return (
		<div>
		{
			pages.map((page, key) => {
				return <div className="page" key={key}>{page.name}</div>;
			})
		}
		</div>
	);
}

export default Stream;
