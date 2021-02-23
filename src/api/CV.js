const getCV = async () => {
  return {
    fullName: localStorage.getItem('cv/fullName') || '',
    position: localStorage.getItem('cv/position') || '',
    avatar: localStorage.getItem('cv/avatar') || '',
    aboutMe: localStorage.getItem('cv/aboutMe') || '',
    experiences: JSON.parse(localStorage.getItem('cv/experiences')) || [],
    educations: JSON.parse(localStorage.getItem('cv/educations')) || [],
    contacts: JSON.parse(localStorage.getItem('cv/contacts')) || [],
    technologies: JSON.parse(localStorage.getItem('cv/technologies')) || '',
    languages: JSON.parse(localStorage.getItem('cv/languages')) || [],
  }
}

const saveCV = async ({
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
  localStorage.setItem('cv/fullName', fullName)
  localStorage.setItem('cv/position', position)
  localStorage.setItem('cv/avatar', avatar)
  localStorage.setItem('cv/aboutMe', aboutMe)
  localStorage.setItem('cv/experiences', JSON.stringify(experiences))
  localStorage.setItem('cv/educations', JSON.stringify(educations))
  localStorage.setItem('cv/contacts', JSON.stringify(contacts))
  localStorage.setItem('cv/technologies', JSON.stringify(technologies))
  localStorage.setItem('cv/languages', JSON.stringify(languages))

  return {
    status: 'ok',
  }
}

export { getCV, saveCV }
