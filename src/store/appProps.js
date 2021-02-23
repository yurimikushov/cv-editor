const createAppProps = () => ({
  title: 'Curriculum vitae',
  editable: true,
  showExampleCV: false,
  isLoading: false,
  setAppTitle(title) {
    this.title = title
  },
  setEditable(editable) {
    this.editable = editable
  },
  getEditable() {
    return this.editable
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
})

export default createAppProps
