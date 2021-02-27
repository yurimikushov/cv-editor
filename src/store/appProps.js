const createAppProps = () => ({
  title: 'Curriculum vitae',
  editable: true,
  showExampleCV: false,
  isCVLoading: false,
  lang: 'en',
  setAppTitle(title) {
    this.title = title
  },
  toggleEditable() {
    this.editable = !this.editable
  },
  getShowExampleCV() {
    return this.showExampleCV
  },
  toggleShowExampleCV() {
    this.showExampleCV = !this.showExampleCV
  },
  setIsCVLoading(isLoading) {
    this.isCVLoading = isLoading
  },
  setLang(lang) {
    this.lang = lang
  },
  setAll(editable, lang) {
    this.editable = editable
    this.setLang(lang)
  },
  getAll() {
    return {
      editable: this.editable,
      lang: this.lang,
    }
  },
})

export default createAppProps
