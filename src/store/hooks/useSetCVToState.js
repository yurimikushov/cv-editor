import { useStore } from '../StoreProvider'

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

export { useSetCVToState }
