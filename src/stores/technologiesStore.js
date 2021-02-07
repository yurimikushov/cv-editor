const exapmleTechnologies =
  'HTML5, CSS3, SCSS, JS, React, React Hooks, Redux, MobX, Git'

const createTechnologiesStore = () => ({
  technologies: exapmleTechnologies,
  setTechnologies(technologies) {
    this.technologies = technologies
  },
})

export default createTechnologiesStore
