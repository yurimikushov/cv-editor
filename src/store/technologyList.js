const createTechnologyList = () => ({
  technologies: '',
  setTechnologies(technologies) {
    this.technologies = technologies
  },
  setAll(technologies) {
    this.setTechnologies(technologies)
  },
  getAll() {
    return {
      technologies: this.technologies,
    }
  },
})

export default createTechnologyList
