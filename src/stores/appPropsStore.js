const createAppPropsStore = () => ({
  name: 'Curriculum vitae',
  setAppName(name) {
    this.name = name
  },
})

export default createAppPropsStore
