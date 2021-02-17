import React from 'react'
import { observer } from 'mobx-react-lite'
import { useContactList } from '../../store'
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
              <TechnologyList />
              <LanguageList />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default observer(CV)
