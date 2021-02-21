import { getCVExample } from '../api'
import {
  useAboutMe,
  useExperienceList,
  useEducationList,
  useContactList,
  useTechnologyList,
  useLanguageList,
} from '../store'

const useLoadExample = () => {
  const { loadAboutMe } = useAboutMe()
  const { loadExperiencies } = useExperienceList()
  const { loadEducations } = useEducationList()
  const { loadContacts } = useContactList()
  const { loadTechnologies } = useTechnologyList()
  const { loadLanguages } = useLanguageList()

  return {
    loadExample: () => {
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
    },
  }
}

export { useLoadExample }
