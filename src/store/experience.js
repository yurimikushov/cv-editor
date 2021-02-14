import { nanoid } from 'nanoid'

const experience = (position, company, duration, description) => ({
  id: nanoid(),
  position,
  company,
  duration,
  description,
  setPosition(position) {
    this.position = position
  },
  setCompany(company) {
    this.company = company
  },
  setDuration(duration) {
    this.duration = duration
  },
  setDescription(description) {
    this.description = description
  },
})

export default experience
