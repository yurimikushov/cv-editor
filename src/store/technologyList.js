const createTechnologyList = () => ({
  technologies: '',
  setTechnologies(technologies) {
    this.technologies = technologies
  },
  getTechnologies() {
    return this.technologies
  },
  loadTechnologies(technologies) {
    this.setTechnologies(technologies)
  },
})

export default createTechnologyList
