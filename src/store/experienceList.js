import createExperience from './experience'

let exapmleExperiences = [
  {
    position: 'Position name',
    company: 'Company name',
    duration: 'Experience duration',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam officia soluta et eius delectus neque eveniet quod temporibus adipisci?',
  },
  {
    position: 'Position name',
    company: 'Company name',
    duration: 'Experience duration',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam officia soluta et eius delectus neque eveniet quod temporibus adipisci?',
  },
  {
    position: 'Position name',
    company: 'Company name',
    duration: 'Experience duration',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam officia soluta et eius delectus neque eveniet quod temporibus adipisci?',
  },
]

exapmleExperiences = exapmleExperiences.map((experience) =>
  createExperience(
    experience.position,
    experience.company,
    experience.duration,
    experience.description
  )
)

const createExperienceList = () => ({
  experiences: exapmleExperiences,
  addExperience() {
    this.experiences.push(createExperience())
  },
  removeExperience(id) {
    this.experiences = this.experiences.filter(
      (experience) => experience.id !== id
    )
    
    if (this.experiences.length === 0) {
      this.experiences.push(createExperience())
    }
  },
})

export default createExperienceList
