import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { useLocalObservable } from 'mobx-react-lite'
import crecreateAppProps from './appProps'
import createAboutMe from './aboutMe'
import createExperienceList from './experienceList'
import createEducationList from './educationList'
import createContactList from './contactList'
import createTechnologyList from './technologyList'
import createLanguageList from './languageList'

const AppPropsContext = createContext()
const AboutMeContext = createContext()
const ExperienceListContext = createContext()
const EducationListContext = createContext()
const ContactListContext = createContext()
const TechnologyListContext = createContext()
const LanguageListContext = createContext()

AppPropsContext.displayName = 'AppProps'
AboutMeContext.displayName = 'AboutMe'
ExperienceListContext.displayName = 'ExperienceList'
EducationListContext.displayName = 'EducationList'
ContactListContext.displayName = 'ContactList'
TechnologyListContext.displayName = 'TechnologyList'
LanguageListContext.displayName = 'LanguageList'

const StoreProvider = ({ children }) => {
  const appProps = useLocalObservable(crecreateAppProps)
  const aboutMe = useLocalObservable(createAboutMe)
  const experienceList = useLocalObservable(createExperienceList)
  const educationList = useLocalObservable(createEducationList)
  const contactList = useLocalObservable(createContactList)
  const technologyList = useLocalObservable(createTechnologyList)
  const languageList = useLocalObservable(createLanguageList)

  return (
    <AppPropsContext.Provider value={appProps}>
      <AboutMeContext.Provider value={aboutMe}>
        <ExperienceListContext.Provider value={experienceList}>
          <EducationListContext.Provider value={educationList}>
            <ContactListContext.Provider value={contactList}>
              <TechnologyListContext.Provider value={technologyList}>
                <LanguageListContext.Provider value={languageList}>
                  {children}
                </LanguageListContext.Provider>
              </TechnologyListContext.Provider>
            </ContactListContext.Provider>
          </EducationListContext.Provider>
        </ExperienceListContext.Provider>
      </AboutMeContext.Provider>
    </AppPropsContext.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element).isRequired,
  ]),
}

const useAppProps = () => useContext(AppPropsContext)
const useAboutMe = () => useContext(AboutMeContext)
const useExperienceList = () => useContext(ExperienceListContext)
const useEducationList = () => useContext(EducationListContext)
const useContactList = () => useContext(ContactListContext)
const useTechnologyList = () => useContext(TechnologyListContext)
const useLanguageList = () => useContext(LanguageListContext)

export {
  StoreProvider as default,
  useAppProps,
  useAboutMe,
  useExperienceList,
  useEducationList,
  useContactList,
  useTechnologyList,
  useLanguageList,
}
