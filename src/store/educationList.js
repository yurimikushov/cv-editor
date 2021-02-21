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
  fillInExample() {
    this.educations = []
    this.addEducation('Degree name', 'University name', 'Education duration')
    this.addEducation('Degree name', 'University name', 'Education duration')
  },
})

export default createEducationList
