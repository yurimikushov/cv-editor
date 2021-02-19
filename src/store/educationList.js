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
  addEducation() {
    this.educations.push(createEducationStore())
  },
  removeEducation(id) {
    this.educations = this.educations.filter((education) => education.id !== id)

    if (this.educations.length === 0) {
      this.educations.push(createEducationStore())
    }
  },
})

export default createEducationListStore
