import React from 'react'
import AboutMe from '../../components/AboutMe'
import ExperienceList from '../../components/ExperienceList'
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

const Info = () => (
  <main className='info'>
    <div className='main-info'>
      <div className='main-info__item'>
        <AboutMe text={aboutMeText} />
      </div>
      <div className='main-info__item'>
        <ExperienceList experienceList={experienceList} />
      </div>
    </div>
    <div className='another-info'></div>
  </main>
)

export default Info
