import html2pdf from 'html2pdf.js'

const downloadPDF = (filename, fromSelecotor) => {
  html2pdf()
    .set({
      filename: filename,
      margin: 20,
    })
    .from(document.querySelector(fromSelecotor))
    .save()
}

export { downloadPDF }
