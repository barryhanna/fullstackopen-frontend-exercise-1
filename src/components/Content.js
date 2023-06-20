import Part from './Part';

const Content = ({ parts, exercises }) => {
	return (
		<>
			{parts.map((part, i) => (
				<Part part={part} exercise={exercises[i]} />
			))}
		</>
	);
};

export default Content;
