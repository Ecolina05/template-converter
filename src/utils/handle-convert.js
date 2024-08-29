export const convertTemplateToString = (template) => {
	let result = `"${template.replace(/"/g, '\\"').replace(/[\n\t]/g, '')}"`;

	if (result.includes('{{{')) {
		result = result.replace('{{{', '{ {{');
	}

	return result;
};

export const convertStringToTemplate = (templateString) => {
	let result = templateString
		.replace(/\\"/g, '"')
		.replace(/\\n/g, '\n')
		.replace(/\\t/g, '\t')
		.replace(/^"(.*)"$/, '$1');

	if (result.startsWith('"') && result.endsWith('"')) {
		result = result.slice(1, -1);
	}

	return result;
};
