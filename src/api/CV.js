const getCV = () => {
  return new Promise((resolve) => {
    resolve({
      fullName: localStorage.getItem('fullName') || '',
      position: localStorage.getItem('position') || '',
      avatar: localStorage.getItem('avatar') || '',
      aboutMe: localStorage.getItem('aboutMe') || '',
      experiences: JSON.parse(localStorage.getItem('experiences')) || [],
      educations: JSON.parse(localStorage.getItem('educations')) || [],
      contacts: JSON.parse(localStorage.getItem('contacts')) || [],
      technologies: JSON.parse(localStorage.getItem('technologies')) || '',
      languages: JSON.parse(localStorage.getItem('languages')) || [],
    })
  })
}

const saveCV = ({
  fullName,
  position,
  avatar,
  aboutMe,
  experiences,
  educations,
  contacts,
  technologies,
  languages,
}) => {
  return new Promise((resolve) => {
    localStorage.setItem('fullName', fullName)
    localStorage.setItem('position', position)
    localStorage.setItem('avatar', avatar)
    localStorage.setItem('aboutMe', aboutMe)
    localStorage.setItem('experiences', JSON.stringify(experiences))
    localStorage.setItem('educations', JSON.stringify(educations))
    localStorage.setItem('contacts', JSON.stringify(contacts))
    localStorage.setItem('technologies', JSON.stringify(technologies))
    localStorage.setItem('languages', JSON.stringify(languages))

    resolve({ status: 'ok' })
  })
}

export { getCV, saveCV }
