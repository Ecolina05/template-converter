const IconButton = ({ children, disabled, onClick }) => {
	return (
		<button
			className='border-none bg-gray-800 hover:bg-gray-900 rounded-lg text-sm text-center inline-flex items-center px-2 py-2'
			disabled={disabled}
			onClick={onClick}
			type='button'
		>
			{children}
		</button>
	);
};

export default IconButton;
