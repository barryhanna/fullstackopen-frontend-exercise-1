import Part from './Part';
import { v4 as uuid } from 'uuid';

const Content = ({ parts }) => {
	return (
		<>
			{parts.map((part) => (
				<Part key={uuid()} part={part} />
			))}
		</>
	);
};

export default Content;
