import { useEffect, useState } from 'react';

import SelectType from './select-type';
import { copyText } from '../../utils/commons';
import { showToast } from '../../utils/toast';

import { FaRegCopy } from 'react-icons/fa6';
import { MdCleaningServices } from 'react-icons/md';
import IconButton from '../../components/icon-button';
import classNames from 'classnames';

const Code = ({ className, defaultSeletedType, placeholder, onSelectedType, onChangeValue, defaultValue }) => {
	const [, setSelectType] = useState(defaultSeletedType);
	const [value, setValue] = useState('');

	const classnames = classNames('code-container', className);

	const handleSelectedType = (newValue) => {
		setSelectType(newValue);
		onSelectedType(newValue);
	};

	const handleOnChangeValue = (e) => {
		const value = e.target.value || '';

		setValue(value);
		onChangeValue(value);
	};

	const handleCopy = (value) => {
		copyText(value);
		showToast('success', 'Copied to clipboard!');
	};

	const handleClean = () => {
		setValue('');
		onChangeValue('');
	};

	useEffect(() => {
		if (defaultValue) {
			setValue(defaultValue);
		}
	}, [defaultValue]);

	return (
		<div className={classnames}>
			<header className='flex w-full justify-between items-center border-b border-b-gray-600 my-2 pb-2'>
				<SelectType
					defaultValue={defaultSeletedType}
					onSelect={handleSelectedType}
				/>

				<div className='flex items-center gap-2'>
					<IconButton onClick={handleClean}>
						<MdCleaningServices />
					</IconButton>

					<IconButton onClick={() => handleCopy(value)}>
						<FaRegCopy />
					</IconButton>
				</div>
			</header>

			<textarea
				className='textarea'
				onChange={handleOnChangeValue}
				placeholder={placeholder}
				required
				value={value || ''}
			></textarea>
		</div>
	);
};

export default Code;
