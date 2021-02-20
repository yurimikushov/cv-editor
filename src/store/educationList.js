import createEducation from './education'

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
  createEducation(edu.degree, edu.university, edu.duration)
)

const createEducationList = () => ({
  educations: exapmleEducations,
  addEducation() {
    this.educations.push(createEducation())
  },
  removeEducation(id) {
    this.educations = this.educations.filter((education) => education.id !== id)

    if (this.educations.length === 0) {
      this.educations.push(createEducation())
    }
  },
})

export default createEducationList
