const IconButton = ({ children, disabled, onClick }) => {
	return (
		<button
			className='border border-gray-300 rounded-lg text-sm text-center inline-flex items-center px-2 py-2'
			disabled={disabled}
			onClick={onClick}
			type='button'
		>
			{children}
		</button>
	);
};

export default IconButton;
