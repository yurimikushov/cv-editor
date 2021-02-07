import React from 'react'
import { useAboutMeStore } from '../../stores'
import AboutMe from '../../components/AboutMe'
import ExperienceList from '../../components/ExperienceList'
import EducationList from '../../components/EducationList'
import ContactList from '../../components/ContactList'
import TechnologyList from '../../components/TechnologyList'
import LanguageList from '../../components/LanguageList'
import './index.css'

import {
  experiences,
  educations,
  contacts,
  technologies,
  languageList,
} from './fake-data'

const InfoContainer = () => {
  const aboutMe = useAboutMeStore()

  return (
    <main className='info'>
      <div className='main-info'>
        <AboutMe description={aboutMe.description} />
        <ExperienceList experienceList={experiences} />
        <EducationList educationList={educations} />
      </div>
      <div className='another-info'>
        <ContactList contacts={contacts} />
        <TechnologyList description={technologies} />
        <LanguageList languages={languageList} />
      </div>
    </main>
  )
}

export default InfoContainer
