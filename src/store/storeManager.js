import { useEffect } from 'react'
import { getAppProps, saveAppProps, getCV, saveCV, getCVExample } from '../api'
import { useStore } from '../store'

const useSetAppPropsToState = () => {
  const { appProps } = useStore()

  return ({ editable, lang }) => {
    appProps.setAll(editable, lang)
  }
}

const useGetAppPropsFromState = () => {
  const { appProps } = useStore()

  return () => ({
    ...appProps.getAll(),
  })
}

const useSetCVToState = () => {
  const {
    aboutMe,
    avatar,
    experienceList,
    educationList,
    contactList,
    technologyList,
    languageList,
  } = useStore()

  return ({
    fullName,
    position,
    avatar: avatarSrc,
    aboutMe: description,
    experiences,
    educations,
    contacts,
    technologies,
    languages,
  }) => {
    aboutMe.setAll(fullName, position, description)
    avatar.setAll(avatarSrc)
    experienceList.setAll(experiences)
    educationList.setAll(educations)
    contactList.setAll(contacts)
    technologyList.setAll(technologies)
    languageList.setAll(languages)
  }
}

const useGetCVFromState = () => {
  const {
    aboutMe,
    avatar,
    experienceList,
    educationList,
    contactList,
    technologyList,
    languageList,
  } = useStore()

  return () => ({
    ...aboutMe.getAll(),
    ...avatar.getAll(),
    ...experienceList.getAll(),
    ...educationList.getAll(),
    ...contactList.getAll(),
    ...technologyList.getAll(),
    ...languageList.getAll(),
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
