const avatarPlaceholder = '/img/avatar-placeholder-100x100.png'

const createAvatar = () => ({
  avatar: avatarPlaceholder,
  setAvatar(src) {
    this.avatar = src
  },
  removeAvatar() {
    this.avatar = avatarPlaceholder
  },
  setAll(avatar) {
    this.setAvatar(avatar || avatarPlaceholder)
  },
  getAll() {
    return {
      avatar: this.avatar,
    }
  },
})

export default createAvatar
