import { nanoid } from 'nanoid'

const createEducationStore = (degree, university, duration) => ({
  id: nanoid(),
  degree,
  university,
  duration,
  setDegree(degree) {
    this.degree = degree
  },
  setUniversity(university) {
    this.university = university
  },
  setDuration(duration) {
    this.duration = duration
  },
})

export default createEducationStore
