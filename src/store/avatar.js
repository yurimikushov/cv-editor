const createAvatar = () => ({
  avatar: '',
  setAvatar(src) {
    this.avatar = src
  },
  removeAvatar() {
    this.avatar = ''
  },
  setAll(avatar) {
    this.setAvatar(avatar)
  },
  getAll() {
    return {
      avatar: this.avatar,
    }
  },
})

export default createAvatar
