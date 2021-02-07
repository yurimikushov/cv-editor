import { nanoid } from 'nanoid'

const exapmleEducations = [
  {
    id: nanoid(),
    degree: 'Degree name',
    university: 'University name',
    duration: 'Education duration',
  },
  {
    id: nanoid(),
    degree: 'Degree name',
    university: 'University name',
    duration: 'Education duration',
  },
]

const createEducationsStore = () => ({
  educations: exapmleEducations,
  addEducations(degree, university, duration) {
    this.educations.push({
      id: nanoid(),
      degree,
      university,
      duration,
    })
  },
  removeEducations(id) {
    this.educations = this.educations.filter((education) => education.id !== id)
  },
})

export default createEducationsStore
