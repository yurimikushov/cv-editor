import createExperience from './experience'

const createExperienceList = () => ({
  experiences: [createExperience()],
  getExperiences() {
    return this.experiences
  },
  addExperience(position = '', company = '', duration = '', description = '') {
    this.experiences.push(
      createExperience(position, company, duration, description)
    )
  },
  removeExperience(id) {
    this.experiences = this.experiences.filter(
      (experience) => experience.id !== id
    )

    if (this.experiences.length === 0) {
      this.experiences.push(createExperience())
    }
  },
  loadExperiencies(experiences) {
    this.experiences = []
    experiences.forEach(({ position, company, duration, description }) => {
      this.addExperience(position, company, duration, description)
    })
  },
})

export default createExperienceList
