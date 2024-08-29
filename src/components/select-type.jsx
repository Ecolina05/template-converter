import { goTemplate, string } from '../constans';

const SelectType = ({ onChange, value }) => {
	const handleOnChange = (e) => {
		onChange(e.target.value);
	};

	return (
		<select
			className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg w-[150px] p-2'
			onChange={handleOnChange}
			value={value}
		>
			<option value={goTemplate}>Go template</option>
			<option value={string}>String</option>
		</select>
	);
};

export default SelectType;
