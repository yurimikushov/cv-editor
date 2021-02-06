import React from 'react'
import AboutMe from '../../components/AboutMe'
import ExperienceList from '../../components/ExperienceList'
import EducationList from '../../components/EducationList'
import ContactList from '../../components/ContactList'
import TechnologyList from '../../components/TechnologyList'
import LanguageList from '../../components/LanguageList'
import './index.css'

import {
  aboutMe,
  experiences,
  educations,
  contacts,
  technologies,
  languageList,
} from './fake-data'

const InfoContainer = () => (
  <main className='info'>
    <div className='main-info'>
      <AboutMe description={aboutMe} />
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

export default InfoContainer
