import createEducationStore from './education'

let exapmleEducations = [
  {
    degree: 'Degree name',
    university: 'University name',
    duration: 'Education duration',
  },
  {
    degree: 'Degree name',
    university: 'University name',
    duration: 'Education duration',
  },
]

exapmleEducations = exapmleEducations.map((edu) =>
  createEducationStore(edu.degree, edu.university, edu.duration)
)

const createEducationListStore = () => ({
  educations: exapmleEducations,
  addEducations(degree, university, duration) {
    this.educations.push(createEducationStore(degree, university, duration))
  },
  removeEducations(id) {
    this.educations = this.educations.filter((education) => education.id !== id)
  },
})

export default createEducationListStore
