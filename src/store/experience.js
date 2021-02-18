import { nanoid } from 'nanoid'

const createExperienceStore = (
  position = '',
  company = '',
  duration = '',
  description = ''
) => ({
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

export default createExperienceStore
