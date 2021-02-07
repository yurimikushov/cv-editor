const exapmleDescription =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum dolores eos deleniti inventore delectus omnis, velit repudiandae qui nobis vel consequatur quisquam. Doloremque incidunt magnam quasi autem mollitia est praesentium voluptate voluptatem, harum, similique temporibus architecto eum cupiditate eligendi enim ab iste, alias ea. Veritatis id harum dolores unde.'

const createAboutMeStore = () => ({
  description: exapmleDescription,
  setAboutMe(description) {
    this.description = description
  },
})

export default createAboutMeStore
