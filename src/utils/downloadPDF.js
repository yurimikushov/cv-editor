import html2pdf from 'html2pdf.js'

const downloadPDF = (filename, fromSelecotor) => {
  const opt = {
    filename: filename,
    margin: 20,
    image: { type: 'png', quality: 1 },
    jsPDF: { orientation: 'p', unit: 'mm', format: 'a4' },
  }

  html2pdf().set(opt).from(document.querySelector(fromSelecotor)).save()
}

export { downloadPDF }
