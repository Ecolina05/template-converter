import { useEffect, useState } from 'react';
import { goTemplate, string } from '../../utils/constans';

const SelectType = ({ defaultValue, onSelect }) => {
	const [selected, setSelected] = useState(defaultValue);

	const options = [
		{ label: 'JSON/Go template', value: goTemplate },
		{ label: 'String', value: string },
	];
	const defaultClass = 'px-4 py-1 text-gray-200 rounded-lg';

	const handleSelect = (newValue) => {
		setSelected(newValue);
		onSelect(newValue);
	};

	useEffect(() => {
		if (defaultValue) {
			setSelected(defaultValue);
		}
	}, [defaultValue]);

	return (
		<ul className='select-type-container'>
			{options.map((option) => (
				<li key={option.value}>
					<button
						className={`${defaultClass} ${selected === option.value ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-900'}`}
						onClick={() => handleSelect(option.value)}
					>
						{option.label}
					</button>
				</li>
			))}
		</ul>
	);
};

export default SelectType;
