const exapmleDescription =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum dolores eos deleniti inventore delectus omnis, velit repudiandae qui nobis vel consequatur quisquam. Doloremque incidunt magnam quasi autem mollitia est praesentium voluptate voluptatem, harum, similique temporibus architecto eum cupiditate eligendi enim ab iste, alias ea. Veritatis id harum dolores unde.'

const createAboutMe = () => ({
  fullName: 'Full name',
  position: 'Frontend developer',
  avatar: 'https://i.ibb.co/KF2jBLd/image.jpg',
  description: exapmleDescription,
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
})

export default createAboutMe
