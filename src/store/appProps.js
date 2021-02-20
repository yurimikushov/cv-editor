const createAppProps = () => ({
  title: 'Curriculum vitae',
  editable: true,
  setAppTitle(title) {
    this.title = title
  },
  toggleEditable() {
    this.editable = !this.editable
  },
})

export default createAppProps
