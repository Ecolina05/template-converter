import toast from 'react-hot-toast';

const styles = {
	borderRadius: '10px',
	background: '#333',
	color: '#fff',
	fontSize: '13px',
};

/**
 *
 * @param {*} type 'success' | 'error'
 * @param {*} message
 * @returns
 */
const showToast = (type, message) => {
	const toastOptions = {
		position: 'top-right',
		style: styles,
	};

	return toast[type](message, toastOptions);
};

export { showToast };
