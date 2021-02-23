import { useEffect } from 'react'
import { getAppProps, saveAppProps, getCV, saveCV, getCVExample } from '../api'
import { useStore } from '../store'

const useSetAppPropsToState = () => {
  const { appProps } = useStore()

  return ({ editable }) => {
    appProps.setEditable(editable)
  }
}

const useGetAppPropsFromState = () => {
  const { appProps } = useStore()

  return () => ({
    editable: appProps.getEditable(),
  })
}

const useSetCVToState = () => {
  const {
    aboutMe,
    experienceList,
    educationList,
    contactList,
    technologyList,
    languageList,
  } = useStore()

  return ({
    fullName,
    position,
    avatar,
    aboutMe: description,
    experiences,
    educations,
    contacts,
    technologies,
    languages,
  }) => {
    aboutMe.loadAboutMe(fullName, position, avatar, description)
    experienceList.loadExperiencies(experiences)
    educationList.loadEducations(educations)
    contactList.loadContacts(contacts)
    technologyList.loadTechnologies(technologies)
    languageList.loadLanguages(languages)
  }
}

const useGetCVFromState = () => {
  const {
    aboutMe,
    experienceList,
    educationList,
    contactList,
    technologyList,
    languageList,
  } = useStore()

  return () => ({
    fullName: aboutMe.getFullName(),
    position: aboutMe.getPosition(),
    avatar: aboutMe.getAvatar(),
    aboutMe: aboutMe.getDescription(),
    experiences: experienceList.getExperiences(),
    educations: educationList.getEducations(),
    contacts: contactList.getContacts(),
    technologies: technologyList.getTechnologies(),
    languages: languageList.getLanguages(),
  })
}

const useLoadAppProps = () => {
  const setAppProps = useSetAppPropsToState()

  return async () => setAppProps(await getAppProps())
}

const useSaveAppProps = () => {
  const getAppProps = useGetAppPropsFromState()

  return async () => await saveAppProps(getAppProps())
}

const useLoadCV = () => {
  const setCV = useSetCVToState()

  return async () => setCV(await getCV())
}

const useSaveCV = () => {
  const { appProps } = useStore()
  const getCV = useGetCVFromState()

  return async () => {
    if (appProps.getShowExampleCV()) {
      return
    }

    await saveCV(getCV())
  }
}

const useLoadAppData = () => {
  const { appProps } = useStore()
  const loadAppProps = useLoadAppProps()
  const loadCV = useLoadCV()

  useEffect(() => {
    appProps.setIsLoading(true)

    loadAppProps()
    loadCV()

    appProps.setIsLoading(false)
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
  const { appProps } = useStore()
  const saveCV = useSaveCV()
  const setCV = useSetCVToState()

  return async () => {
    appProps.setIsLoading(true)

    await saveCV()
    setCV(await getCVExample())

    appProps.setIsLoading(false)
  }
}

export { useLoadAppData, useSaveAppData, useLoadCV, useLoadExampleCV }
