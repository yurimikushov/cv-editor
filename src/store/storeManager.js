import { getCV, saveCV, getCVExample } from '../api'
import {
  useAboutMe,
  useExperienceList,
  useEducationList,
  useContactList,
  useTechnologyList,
  useLanguageList,
} from '../store'

const useLoadCV = () => {
  const { loadAboutMe } = useAboutMe()
  const { loadExperiencies } = useExperienceList()
  const { loadEducations } = useEducationList()
  const { loadContacts } = useContactList()
  const { loadTechnologies } = useTechnologyList()
  const { loadLanguages } = useLanguageList()

  return () => {
    getCV()
      .then(
        ({
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
          loadAboutMe(fullName, position, avatar, aboutMe)
          loadExperiencies(experiences)
          loadEducations(educations)
          loadContacts(contacts)
          loadTechnologies(technologies)
          loadLanguages(languages)
        }
      )
      .catch((err) => console.error(err))
  }
}

const useSaveCV = () => {
  const { getFullName, getPosition, getAvatar, getAboutMe } = useAboutMe()
  const { getExperiences } = useExperienceList()
  const { getEducations } = useEducationList()
  const { getContacts } = useContactList()
  const { getTechnologies } = useTechnologyList()
  const { getLanguages } = useLanguageList()

  return () => {
    saveCV({
      fullName: getFullName(),
      position: getPosition(),
      avatar: getAvatar(),
      aboutMe: getAboutMe(),
      experiences: getExperiences(),
      educations: getEducations(),
      contacts: getContacts(),
      technologies: getTechnologies(),
      languages: getLanguages(),
    }).catch((err) => console.error(err))
  }
}

const useLoadExample = () => {
  const { loadAboutMe } = useAboutMe()
  const { loadExperiencies } = useExperienceList()
  const { loadEducations } = useEducationList()
  const { loadContacts } = useContactList()
  const { loadTechnologies } = useTechnologyList()
  const { loadLanguages } = useLanguageList()

  return () => {
    getCVExample()
      .then(
        ({
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
          loadAboutMe(fullName, position, avatar, aboutMe)
          loadExperiencies(experiences)
          loadEducations(educations)
          loadContacts(contacts)
          loadTechnologies(technologies)
          loadLanguages(languages)
        }
      )
      .catch((err) => console.error(err))
  }
}

export { useLoadCV, useSaveCV, useLoadExample }
