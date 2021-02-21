const createAboutMe = () => ({
  fullName: '',
  position: '',
  avatar: 'https://i.ibb.co/KF2jBLd/image.jpg',
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
  fillInExample() {
    this.setFullName('Yuri Mikushov')
    this.setPosition('Frontend develover')
    this.setAvatar('/img/avatar-example.png')
    this.setDescription(
      `I've been developing and supporting a software products running on the 1C:Enterprise platform for about 3 years. I've a lot of interest in creating and programming an user interfaces. Now I'm trying to start developing a frontend apps professionally.`
    )
  },
})

export default createAboutMe
