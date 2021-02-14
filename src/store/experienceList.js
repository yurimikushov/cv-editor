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

const createExperienceStore = () => ({
  experiences: exapmleExperiences,
  addExperience(position, company, duration, description) {
    this.experiences.push(
      createExperience(position, company, duration, description)
    )
  },
  removeExperience(id) {
    this.experiences.filter((experience) => experience.id !== id)
  },
})

export default createExperienceStore
