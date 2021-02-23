const createAboutMe = () => ({
  fullName: '',
  position: '',
  description: '',
  setFullName(fullName) {
    this.fullName = fullName
  },
  setPosition(position) {
    this.position = position
  },
  setDescription(description) {
    this.description = description
  },
  setAll(fullName, position, description) {
    this.setFullName(fullName)
    this.setPosition(position)
    this.setDescription(description)
  },
  getAll() {
    return {
      fullName: this.fullName,
      position: this.position,
      aboutMe: this.description,
    }
  },
})

export default createAboutMe
