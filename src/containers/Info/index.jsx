import React from 'react'
import { observer } from 'mobx-react-lite'
import {
  useAboutMeStore,
  useExperiencesStore,
  useEducationsStore,
  useContactsStore,
  useTechnologiesStore,
  useLanguagesStore,
} from '../../stores'
import AboutMe from '../../components/AboutMe'
import ExperienceList from '../../components/ExperienceList'
import EducationList from '../../components/EducationList'
import ContactList from '../../components/ContactList'
import TechnologyList from '../../components/TechnologyList'
import LanguageList from '../../components/LanguageList'
import './index.css'

const InfoContainer = observer(() => {
  const aboutMeStore = useAboutMeStore()
  const experiencesStore = useExperiencesStore()
  const educationsStore = useEducationsStore()
  const contactsStore = useContactsStore()
  const technologiesStore = useTechnologiesStore()
  const languagesStore = useLanguagesStore()

  return (
    <main className='info'>
      <div className='main-info'>
        <AboutMe description={aboutMeStore.description} />
        <ExperienceList experiences={experiencesStore.experiences} />
        <EducationList educations={educationsStore.educations} />
      </div>
      <div className='another-info'>
        <ContactList contacts={contactsStore.contacts} />
        <TechnologyList technologies={technologiesStore.technologies} />
        <LanguageList languages={languagesStore.languages} />
      </div>
    </main>
  )
})

export default InfoContainer
