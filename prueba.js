const path = require('path');
const fs = require('fs').promises;
const libre = require('libreoffice-convert');
libre.convertAsync = require('util').promisify(libre.convert);

async function main() {
	const ext = 'pdf'; // Output extension.
	const inputPath = path.join(__dirname, './uploads/PSICONUTRICION.docx');
	const outputPath = path.join(__dirname, `/example.${ext}`);

	// Read the input file.
	const docxBuf = await fs.readFile(inputPath);
    let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);
    await fs.writeFile(outputPath, pdfBuf);
}

main().catch(function (err) {
	console.log(`Error converting file: ${err}`);
});