const createAppPropsStore = () => ({
  name: 'Curriculum vitae',
  showPreview: false,
  setAppName(name) {
    this.name = name
  },
  toggleShowPreview() {
    this.showPreview = !this.showPreview
  },
})

export default createAppPropsStore
