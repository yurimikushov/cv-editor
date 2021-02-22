const createAppProps = () => ({
  title: 'Curriculum vitae',
  editable: true,
  showExampleCV: false,
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
})

export default createAppProps
