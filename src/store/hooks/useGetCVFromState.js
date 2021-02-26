import { useStore } from '../StoreProvider'

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

export { useGetCVFromState }
