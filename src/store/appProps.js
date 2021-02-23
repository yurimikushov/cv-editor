const createAppProps = () => ({
  title: 'Curriculum vitae',
  editable: true,
  showExampleCV: false,
  isLoading: false,
  setAppTitle(title) {
    this.title = title
  },
  toggleEditable() {
    if (this.showExampleCV) {
      this.editable = false
      return
    }

    this.editable = !this.editable
  },
  getShowExampleCV() {
    return this.showExampleCV
  },
  toggleShowExampleCV() {
    this.showExampleCV = !this.showExampleCV

    if (this.showExampleCV) {
      this.editable = false
    }
  },
  setIsLoading(isLoading) {
    this.isLoading = isLoading
  },
  setAll(editable) {
    this.editable = editable
  },
  getAll() {
    return {
      editable: this.editable,
    }
  },
})

export default createAppProps
