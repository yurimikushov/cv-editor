import { useEffect } from 'react'
import { getAppProps, saveAppProps, getCV, saveCV, getCVExample } from '../api'
import {
  useAppProps,
  useAboutMe,
  useExperienceList,
  useEducationList,
  useContactList,
  useTechnologyList,
  useLanguageList,
} from '../store'

const useSetAppPropsToState = () => {
  const { setEditable } = useAppProps()

  return ({ editable }) => {
    setEditable(editable)
  }
}

const useGetAppPropsToState = () => {
  const { getEditable } = useAppProps()

  return () => ({
    editable: getEditable(),
  })
}

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

const useLoadAppProps = () => {
  const setAppProps = useSetAppPropsToState()

  return async () => setAppProps(await getAppProps())
}

const useSaveAppProps = () => {
  const getAppProps = useGetAppPropsToState()

  return async () => await saveAppProps(getAppProps())
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

const useLoadAppData = () => {
  const loadAppProps = useLoadAppProps()
  const loadCV = useLoadCV()

  useEffect(() => {
    loadAppProps()
    loadCV()
  }, [])
}

const useSaveAppData = () => {
  const saveAppProps = useSaveAppProps()
  const saveCV = useSaveCV()

  useEffect(() => {
    const saveAppData = () => {
      saveAppProps()
      saveCV()
    }

    window.addEventListener('beforeunload', saveAppData)
    return () => window.removeEventListener('beforeunload', saveAppData)
  }, [])
}

const useLoadExampleCV = () => {
  const saveCV = useSaveCV()
  const setCV = useSetCVToState()

  return async () => {
    await saveCV()
    setCV(await getCVExample())
  }
}

export { useLoadAppData, useSaveAppData, useLoadCV, useLoadExampleCV }
