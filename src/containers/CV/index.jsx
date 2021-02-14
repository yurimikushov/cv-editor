import React from 'react'
import { observer } from 'mobx-react-lite'
import Header from '../Header'
import { useContactList, useTechnologyList, useLanguageList } from '../../store'
import AboutMe from '../AboutMe'
import ExperienceList from '../ExperienceList'
import EducationList from '../EducationList'
import ContactList from '../../components/ContactList'
import TechnologyList from '../../components/TechnologyList'
import LanguageList from '../../components/LanguageList'
import './index.css'

const CVContainer = () => {
  const contactList = useContactList()
  const technologyList = useTechnologyList()
  const languageList = useLanguageList()

  return (
    <div className='cv-wrapper'>
      <div className='cv'>
        <Header />
        <main className='cv-body'>
          <div className='cv-main-info'>
            <AboutMe />
            <ExperienceList />
            <EducationList />
          </div>
          <div className='cv-another-info'>
            <ContactList contacts={contactList.contacts} />
            <TechnologyList technologies={technologyList.technologies} />
            <LanguageList languages={languageList.languages} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default observer(CVContainer)
