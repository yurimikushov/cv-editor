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
  fillInExample() {
    this.experiences = []
    this.addExperience(
      'Position name',
      'Company name',
      'Experience duration',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam officia soluta et eius delectus neque eveniet quod temporibus adipisci?'
    )
    this.addExperience(
      'Position name',
      'Company name',
      'Experience duration',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam officia soluta et eius delectus neque eveniet quod temporibus adipisci?'
    )
  },
})

export default createExperienceList
