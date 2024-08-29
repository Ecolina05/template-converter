export const copyText = async (value) => {
	try {
		await navigator.clipboard.writeText(value);
	} catch (error) {
		const selector = document.createElement('textarea');
		selector.style.position = 'fixed';
		selector.style.opacity = '0'; // Ocultar el textarea
		selector.value = value;
		document.body.appendChild(selector);
		selector.focus();
		selector.select();
		document.execCommand('copy');
		document.body.removeChild(selector);
	}
};
