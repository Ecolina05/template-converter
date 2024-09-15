import classNames from 'classnames';

import './button.css';

const Button = ({ className, children, disabled, type = 'button', variant, onClick }) => {
	const classes = classNames('font-medium rounded-lg text-sm px-5 py-2.5', {
		'btn-primary': variant === 'primary',
		'btn-dark': variant === 'dark',
		'btn-disabled': disabled,
		[className]: className,
	});

	return (
		<button
			className={classes}
			disabled={disabled}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
};

export default Button;
