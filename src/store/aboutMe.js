const avatarPlaceholder = '/img/avatar-placeholder-100x100.png'

const createAboutMe = () => ({
  fullName: '',
  position: '',
  avatar: avatarPlaceholder,
  description: '',
  setFullName(fullName) {
    this.fullName = fullName
  },
  getFullName() {
    return this.fullName
  },
  setPosition(position) {
    this.position = position
  },
  getPosition() {
    return this.position
  },
  setAvatar(src) {
    this.avatar = src
  },
  getAvatar() {
    return this.avatar
  },
  removeAvatar() {
    this.avatar = avatarPlaceholder
  },
  setDescription(description) {
    this.description = description
  },
  getDescription() {
    return this.description
  },
  loadAboutMe(fullName, position, avatar, description) {
    this.setFullName(fullName)
    this.setPosition(position)
    this.setAvatar(avatar || avatarPlaceholder)
    this.setDescription(description)
  },
})

export default createAboutMe
