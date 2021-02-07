import { nanoid } from 'nanoid'

const exapmleExperiences = [
  {
    id: nanoid(),
    position: 'Position name',
    company: 'Company name',
    duration: 'Experience duration',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam officia soluta et eius delectus neque eveniet quod temporibus adipisci?',
  },
  {
    id: nanoid(),
    position: 'Position name',
    company: 'Company name',
    duration: 'Experience duration',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam officia soluta et eius delectus neque eveniet quod temporibus adipisci?',
  },
  {
    id: nanoid(),
    position: 'Position name',
    company: 'Company name',
    duration: 'Experience duration',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam officia soluta et eius delectus neque eveniet quod temporibus adipisci?',
  },
]

const createExperiencesStore = () => ({
  experiences: exapmleExperiences,
  addExperience(position, company, duration, description) {
    this.experiences.push({
      id: nanoid(),
      position,
      company,
      duration,
      description,
    })
  },
  removeExperience(id) {
    this.experiences = this.experiences.filter(
      (experience) => experience.id !== id
    )
  },
})

export default createExperiencesStore
