import createEducation from './education'

const createEducationList = () => ({
  educations: [createEducation()],
  addEducation(degree = '', university = '', duration = '') {
    this.educations.push(createEducation(degree, university, duration))
  },
  removeEducation(id) {
    this.educations = this.educations.filter((education) => education.id !== id)

    if (this.educations.length === 0) {
      this.educations.push(createEducation())
    }
  },
  setAll(educations) {
    this.educations = []

    if (educations.length === 0) {
      educations = [createEducation()]
    }

    educations.forEach(({ degree, university, duration }) => {
      this.addEducation(degree, university, duration)
    })
  },
  getAll() {
    return {
      educations: this.educations,
    }
  },
})

export default createEducationList
