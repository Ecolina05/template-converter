export const convertTemplateToString = (template) => {
	return `"${template.replace(/"/g, '\\"').replace(/[\n\t]/g, '')}"`;
};

export const convertStringToTemplate = (templateString) => {
	return templateString
		.replace(/\\"/g, '"') // Reemplaza \" con "
		.replace(/\\n/g, '\n') // Reemplaza \n con un salto de línea real
		.replace(/\\t/g, '\t') // Reemplaza \t con un tabulador real
		.replace(/^"(.*)"$/, '$1');
};
