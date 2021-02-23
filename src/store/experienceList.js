import createExperience from './experience'

const createExperienceList = () => ({
  experiences: [createExperience()],
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
  setAll(experiences) {
    this.experiences = []

    if (experiences.length === 0) {
      experiences = [createExperience()]
    }

    experiences.forEach(({ position, company, duration, description }) => {
      this.addExperience(position, company, duration, description)
    })
  },
  getAll() {
    return {
      experiences: this.experiences,
    }
  },
})

export default createExperienceList
