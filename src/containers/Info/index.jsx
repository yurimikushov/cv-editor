import React from 'react'
import AboutMe from '../../components/AboutMe'
import ExperienceList from '../../components/ExperienceList'
import EducationList from '../../components/EducationList'
import ContactList from '../../components/ContactList'
import TechnologyList from '../../components/TechnologyList'
import LanguageList from '../../components/LanguageList'
import './index.css'

const aboutMeText =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum dolores eos deleniti inventore delectus omnis, velit repudiandae qui nobis vel consequatur quisquam. Doloremque incidunt magnam quasi autem mollitia est praesentium voluptate voluptatem, harum, similique temporibus architecto eum cupiditate eligendi enim ab iste, alias ea. Veritatis id harum dolores unde.'

const experienceList = [
  {
    id: 'id-1',
    position: 'Position name',
    company: 'Company name',
    duration: 'Experience duration',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam officia soluta et eius delectus neque eveniet quod temporibus adipisci?',
  },
  {
    id: 'id-2',
    position: 'Position name',
    company: 'Company name',
    duration: 'Experience duration',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam officia soluta et eius delectus neque eveniet quod temporibus adipisci?',
  },
  {
    id: 'id-3',
    position: 'Position name',
    company: 'Company name',
    duration: 'Experience duration',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam officia soluta et eius delectus neque eveniet quod temporibus adipisci?',
  },
]

const educationList = [
  {
    id: 'id-1',
    degree: 'Degree name',
    university: 'University name',
    duration: 'Education duration',
  },
  {
    id: 'id-2',
    degree: 'Degree name',
    university: 'University name',
    duration: 'Education duration',
  },
]

const contacts = [
  { title: 'email', href: '/' },
  { title: 'telephone', href: '/' },
  { title: 'github.com', href: '/' },
  { title: 'location', href: '/' },
]

const technologiesDescription =
  'HTML5, CSS3, SCSS, JS, React, React Hooks, Redux, MobX, Git'

const languageList = [{ title: 'Russian' }, { title: 'English' }]

const Info = () => (
  <main className='info'>
    <div className='main-info'>
      <div className='main-info__item'>
        <AboutMe text={aboutMeText} />
      </div>
      <div className='main-info__item'>
        <ExperienceList experienceList={experienceList} />
      </div>
      <div className='main-info__item'>
        <EducationList educationList={educationList} />
      </div>
    </div>
    <div className='another-info'>
      <div className='another-info__item'>
        <ContactList contacts={contacts} />
      </div>
      <div className='another-info__item'>
        <TechnologyList description={technologiesDescription} />
      </div>
      <div className='another-info__item'>
        <LanguageList languages={languageList} />
      </div>
    </div>
  </main>
)

export default Info
