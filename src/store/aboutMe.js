const createAboutMe = () => ({
  fullName: '',
  position: '',
  avatar: '/img/avatar-placeholder-100x100.png',
  description: '',
  setFullName(fullName) {
    this.fullName = fullName
  },
  setPosition(position) {
    this.position = position
  },
  setAvatar(src) {
    this.avatar = src
  },
  setDescription(description) {
    this.description = description
  },
  loadAboutMe(fullName, position, avatar, description) {
    this.setFullName(fullName)
    this.setPosition(position)
    this.setAvatar(avatar)
    this.setDescription(description)
  },
})

export default createAboutMe
