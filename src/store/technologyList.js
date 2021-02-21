const createTechnologyList = () => ({
  description: '',
  setDescription(description) {
    this.description = description
  },
  fillInExample() {
    this.setDescription(
      'HTML5, CSS3, SCSS, JS, Git, React, React Hooks, Redux, MobX'
    )
  },
})

export default createTechnologyList
