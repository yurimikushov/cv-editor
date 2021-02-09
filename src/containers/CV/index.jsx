import React from 'react'
import { observer } from 'mobx-react-lite'
import Header from '../Header'
import {
  useExperiencesStore,
  useEducationsStore,
  useContactsStore,
  useTechnologiesStore,
  useLanguagesStore,
} from '../../stores'
import AboutMe from '../AboutMe'
import ExperienceList from '../../components/ExperienceList'
import EducationList from '../../components/EducationList'
import ContactList from '../../components/ContactList'
import TechnologyList from '../../components/TechnologyList'
import LanguageList from '../../components/LanguageList'
import './index.css'

const CVContainer = observer(() => {
  const experiencesStore = useExperiencesStore()
  const educationsStore = useEducationsStore()
  const contactsStore = useContactsStore()
  const technologiesStore = useTechnologiesStore()
  const languagesStore = useLanguagesStore()

  return (
    <div className='cv'>
      <Header />
      <main className='cv-body'>
        <div className='cv-main-info'>
          <AboutMe />
          <ExperienceList experiences={experiencesStore.experiences} />
          <EducationList educations={educationsStore.educations} />
        </div>
        <div className='cv-another-info'>
          <ContactList contacts={contactsStore.contacts} />
          <TechnologyList technologies={technologiesStore.technologies} />
          <LanguageList languages={languagesStore.languages} />
        </div>
      </main>
    </div>
  )
})

export default CVContainer
