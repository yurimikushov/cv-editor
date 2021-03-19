const createAppProps = (initTitle = 'CV') => ({
  title: initTitle,
  editable: true,
  showExampleCV: false,
  isCVLoading: false,
  lang: 'en',
  setTitle(title) {
    this.title = title ? title : initTitle
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
