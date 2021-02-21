const avatarPlaceholder = '/img/avatar-placeholder-100x100.png'

const createAboutMe = () => ({
  fullName: '',
  position: '',
  avatar: avatarPlaceholder,
  aboutMe: '',
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
  setAboutMe(aboutMe) {
    this.aboutMe = aboutMe
  },
  getAboutMe() {
    return this.aboutMe
  },
  loadAboutMe(fullName, position, avatar, aboutMe) {
    this.setFullName(fullName)
    this.setPosition(position)
    this.setAvatar(avatar || avatarPlaceholder)
    this.setAboutMe(aboutMe)
  },
})

export default createAboutMe
