import { useState } from 'react';
import { convertStringToTemplate, convertTemplateToString } from '../utils/handle-convert';
import { copyText } from '../utils/commons';
import { defaultResult, goTemplate, sameError, string } from '../constans';

import { showToast } from '../utils/toast';
import { FaRegCopy } from 'react-icons/fa6';

import Button from './shared/button/button';
import IconButton from './shared/icon-button';
import SelectType from './select-type';

const Main = () => {
	const [selectTypeInput, setSelectTypeInput] = useState(goTemplate);
	const [inputValue, setInputValue] = useState('');

	const [selectTypeOutput, setSelectTypeOutput] = useState(string);
	const [result, setResult] = useState('Your result will be shown here.');

	const handleConvert = () => {
		let result = defaultResult;

		if (selectTypeInput === goTemplate && selectTypeOutput === string) {
			result = convertTemplateToString(inputValue);
		}

		if (selectTypeInput === string && selectTypeOutput === goTemplate) {
			result = convertStringToTemplate(inputValue);
		}

		if (selectTypeInput === selectTypeOutput) {
			showToast('error', sameError);
		}

		setResult(result);
	};

	const handleReset = () => {
		setResult('Your result will be shown here.');
		setInputValue('');
	};

	const handleCopy = (value) => {
		copyText(value);
		showToast('success', 'Copied to clipboard!');
	};

	return (
		<article className='p-10'>
			<header className='flex flex-col justify-center items-center mt-5'>
				<h1 className='text-3xl text-center font-bold'>Template coverter</h1>
				<p className='text-sm text-gray-600'>
					Made by <b>Ernesto Colina</b>
				</p>
			</header>

			<section className='flex items-center gap-5 w-full mt-14 mx-32'>
				{/* Input */}
				<div className='text-sm border border-gray-300 rounded-lg mh-auto h-[600px] overflow-y-scroll px-3 w-[40%]'>
					<header className='flex w-full justify-between items-center border-b mt-2 mb-3 pb-2'>
						<SelectType
							onChange={setSelectTypeInput}
							value={selectTypeInput}
						/>

						<IconButton
							disabled={!result}
							onClick={() => handleCopy(inputValue)}
						>
							<FaRegCopy />
						</IconButton>
					</header>

					<textarea
						className='block p-2.5 text-sm text-gray-800 border-none w-full h-[500px] resize-none overflow-y-scroll'
						id='textarea-input'
						onChange={(e) => setInputValue(e.target.value)}
						placeholder='Paste your go template here.'
						required
						value={inputValue || ''}
					></textarea>
				</div>

				<img
					alt='right-arrow'
					className='object-contain w-[5%]'
					src='/right-arrow.png'
					width={80}
				/>

				{/* Output */}
				<div className='text-sm border border-gray-300 rounded-lg mh-auto h-[600px] overflow-y-scroll px-3 w-[40%]'>
					<header className='flex w-full justify-between items-center border-b mt-2 mb-3 pb-2'>
						<SelectType
							onChange={setSelectTypeOutput}
							value={selectTypeOutput}
						/>

						<IconButton
							disabled={!result}
							onClick={() => handleCopy(result)}
						>
							<FaRegCopy />
						</IconButton>
					</header>

					{result}
				</div>
			</section>

			<div className='flex items-center justify-end mt-10 mx-24 gap-2'>
				<Button
					disabled={!inputValue}
					onClick={handleConvert}
					type='button'
					variant='dark'
				>
					Convert
				</Button>

				<Button
					input='button'
					onClick={handleReset}
					type='button'
					variant='light'
				>
					Clean
				</Button>
			</div>
		</article>
	);
};

export default Main;
