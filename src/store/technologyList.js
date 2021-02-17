const exapmleTechnologies =
  'HTML5, CSS3, SCSS, JS, React, React Hooks, Redux, MobX, Git'

const createTechnologyListStore = () => ({
  description: exapmleTechnologies,
  setDescription(description) {
    this.description = description
  },
})

export default createTechnologyListStore
