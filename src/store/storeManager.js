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

const useSetCVToState = () => {
  const { loadAboutMe } = useAboutMe()
  const { loadExperiencies } = useExperienceList()
  const { loadEducations } = useEducationList()
  const { loadContacts } = useContactList()
  const { loadTechnologies } = useTechnologyList()
  const { loadLanguages } = useLanguageList()

  return ({
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
}

const useGetCVFromState = () => {
  const { getFullName, getPosition, getAvatar, getAboutMe } = useAboutMe()
  const { getExperiences } = useExperienceList()
  const { getEducations } = useEducationList()
  const { getContacts } = useContactList()
  const { getTechnologies } = useTechnologyList()
  const { getLanguages } = useLanguageList()

  return () => ({
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

const useLoadCV = () => {
  const setCV = useSetCVToState()

  return async () => setCV(await getCV())
}

const useSaveCV = () => {
  const { getShowExampleCV } = useAppProps()
  const getCV = useGetCVFromState()

  return async () => {
    if (getShowExampleCV()) {
      return
    }

    await saveCV(getCV())
  }
}

const useLoadExampleCV = () => {
  const saveCV = useSaveCV()
  const setCV = useSetCVToState()

  return async () => {
    await saveCV()
    setCV(await getCVExample())
  }
}

export { useLoadCV, useSaveCV, useLoadExampleCV }
