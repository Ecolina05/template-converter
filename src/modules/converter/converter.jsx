import { useState } from 'react';

import { convertStringToTemplate, convertTemplateToString } from '../../utils/handle-convert';
import { goTemplate, sameError, string } from '../../utils/constans';

import { showToast } from '../../utils/toast';

import { PiArrowFatLinesRightBold } from 'react-icons/pi';
import Button from '../../components/button/button';
import Code from './code';

const Converter = () => {
	const [inputType, setInputType] = useState(goTemplate);
	const [inputValue, setInputValue] = useState('');

	const [outputType, setOutputType] = useState(string);
	const [result, setResult] = useState('');

	const handleConvert = () => {
		if (inputValue === '') {
			showToast('error', 'Please type or paste your JSON or Go template in the input field.');
			return;
		}

		if (inputType === outputType) {
			showToast('error', sameError);
			return;
		}

		let result = '';

		if (inputType === goTemplate && outputType === string) {
			result = convertTemplateToString(inputValue);
		}

		if (inputType === string && outputType === goTemplate) {
			result = convertStringToTemplate(inputValue);
		}

		setResult(result);
	};

	const handleReset = () => {
		setInputType(goTemplate);
		setInputValue('');
		setOutputType(string);
		setResult('');
	};

	return (
		<article className='p-10'>
			<header className='flex flex-col justify-center items-center mt-5'>
				<h1 className='text-3xl text-center font-bold'>Template coverter</h1>
				<p className='text-sm'>Convert JSON or Go templates to strings easily with our tool.</p>
			</header>

			<section className='mx-32'>
				<section className='flex items-center gap-5 w-full mt-14'>
					<Code
						className='w-[50%]'
						defaultSeletedType='go-template'
						placeholder='Type or paste your JSON or Go template here.'
						onSelectedType={setInputType}
						onChangeValue={setInputValue}
					/>

					<PiArrowFatLinesRightBold
						color='var(--light-color)'
						size={40}
					/>

					<Code
						className='w-[50%]'
						defaultSeletedType='string'
						placeholder='Your result will be shown here.'
						onSelectedType={setOutputType}
						onChangeValue={setResult}
						defaultValue={result}
					/>
				</section>

				<footer className='flex items-center justify-end w-full mt-8 gap-2'>
					<Button
						className='w-[200px]'
						onClick={handleConvert}
						variant='primary'
					>
						Convert
					</Button>
				</footer>
			</section>
		</article>
	);
};

export default Converter;
