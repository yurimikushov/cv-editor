import { getCV, saveCV, getCVExample } from '../api'
import {
  useAppProps,
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

  return async () => {
    const {
      fullName,
      position,
      avatar,
      aboutMe,
      experiences,
      educations,
      contacts,
      technologies,
      languages,
    } = await getCV()

    loadAboutMe(fullName, position, avatar, aboutMe)
    loadExperiencies(experiences)
    loadEducations(educations)
    loadContacts(contacts)
    loadTechnologies(technologies)
    loadLanguages(languages)
  }
}

const useSaveCV = () => {
  const { getShowExampleCV } = useAppProps()
  const { getFullName, getPosition, getAvatar, getAboutMe } = useAboutMe()
  const { getExperiences } = useExperienceList()
  const { getEducations } = useEducationList()
  const { getContacts } = useContactList()
  const { getTechnologies } = useTechnologyList()
  const { getLanguages } = useLanguageList()

  return async () => {
    if (getShowExampleCV()) {
      return
    }

    await saveCV({
      fullName: getFullName(),
      position: getPosition(),
      avatar: getAvatar(),
      aboutMe: getAboutMe(),
      experiences: getExperiences(),
      educations: getEducations(),
      contacts: getContacts(),
      technologies: getTechnologies(),
      languages: getLanguages(),
    })
  }
}

const useLoadExampleCV = () => {
  const saveCV = useSaveCV()
  const { loadAboutMe } = useAboutMe()
  const { loadExperiencies } = useExperienceList()
  const { loadEducations } = useEducationList()
  const { loadContacts } = useContactList()
  const { loadTechnologies } = useTechnologyList()
  const { loadLanguages } = useLanguageList()

  return async () => {
    await saveCV()

    const {
      fullName,
      position,
      avatar,
      aboutMe,
      experiences,
      educations,
      contacts,
      technologies,
      languages,
    } = await getCVExample()

    loadAboutMe(fullName, position, avatar, aboutMe)
    loadExperiencies(experiences)
    loadEducations(educations)
    loadContacts(contacts)
    loadTechnologies(technologies)
    loadLanguages(languages)
  }
}

export { useLoadCV, useSaveCV, useLoadExampleCV }
