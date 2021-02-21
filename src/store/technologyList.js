const createTechnologyList = () => ({
  description: '',
  setDescription(description) {
    this.description = description
  },
  loadTechnologies(description) {
    this.setDescription(description)
  },
})

export default createTechnologyList
