const getCVExample = () => {
  return fetch('data/cv-example.json').then((res) => res.json())
}

export default getCVExample
