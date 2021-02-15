import React from 'react'
import { observer } from 'mobx-react-lite'
import { useContactList, useTechnologyList, useLanguageList } from '../../store'
import EditButton from '../../components/EditButton'
import Header from '../../components/Header'
import AboutMe from '../../components/AboutMe'
import ExperienceList from '../../components/ExperienceList'
import EducationList from '../../components/EducationList'
import ContactList from '../../components/ContactList'
import TechnologyList from '../../components/TechnologyList'
import LanguageList from '../../components/LanguageList'
import './index.css'

const CV = () => {
  const { contacts } = useContactList()
  const { technologies } = useTechnologyList()
  const { languages } = useLanguageList()

  return (
    <>
      <EditButton />
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
              <ContactList contacts={contacts} />
              <TechnologyList technologies={technologies} />
              <LanguageList languages={languages} />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default observer(CV)
