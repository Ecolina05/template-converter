export const convertTemplateToString = (template) => {
	return `"${template.replace(/"/g, '\\"').replace(/[\n\t]/g, '')}"`;
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
