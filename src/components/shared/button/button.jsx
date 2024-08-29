import classNames from 'classnames';

import './button.css';

const Button = ({ children, disabled, type, variant, onClick }) => {
	const classes = classNames('font-medium rounded-lg text-sm px-5 py-2.5', {
		'btn-dark': variant === 'dark',
		'btn-light': variant === 'light',
		'btn-disabled': disabled,
	});

	return (
		<button
			className={classes}
			disabled={disabled}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
