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

const withItemWrapper = (WrappedComponent) => {
  const WithItemWrapper = (props) => (
    <div className='info__item'>
      <WrappedComponent {...props} />
    </div>
  )

  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  WithItemWrapper.displayName = `WithItemWrapper(${wrappedComponentName})`

  return WithItemWrapper
}

const AboutMeItem = withItemWrapper(AboutMe)
const ExperienceListItem = withItemWrapper(ExperienceList)
const EducationListItem = withItemWrapper(EducationList)
const ContactListItem = withItemWrapper(ContactList)
const TechnologyListItem = withItemWrapper(TechnologyList)
const LanguageListItem = withItemWrapper(LanguageList)

const InfoContainer = () => (
  <main className='info'>
    <div className='main-info'>
      <AboutMeItem description={aboutMe} />
      <ExperienceListItem experienceList={experiences} />
      <EducationListItem educationList={educations} />
    </div>
    <div className='another-info'>
      <ContactListItem contacts={contacts} />
      <TechnologyListItem description={technologies} />
      <LanguageListItem languages={languageList} />
    </div>
  </main>
)

export default InfoContainer
