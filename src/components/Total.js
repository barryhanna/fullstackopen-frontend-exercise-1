import React from 'react';

const Total = ({ exercises }) => {
	const total = exercises.reduce((sum, ex) => sum + ex);
	return <p>Number of exercises {total}</p>;
};

export default Total;
