import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import Layout from '../../layouts/Layout'
import TopLine from '../../components/TopLine'
import Loader from '../../components/Common/Loader'
import EditButton from '../../components/EditButton'
import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import AboutMe from '../../components/AboutMe'
import ExperienceList from '../../components/ExperienceList'
import EducationList from '../../components/EducationList'
import ContactList from '../../components/ContactList'
import TechnologyList from '../../components/TechnologyList'
import LanguageList from '../../components/LanguageList'
import './index.css'

const CVPage = () => {
  const {
    appProps: { isCVLoading, showExampleCV },
  } = useStore()

  if (isCVLoading) {
    return <Loader className='cv-loader' />
  }

  return (
    <Layout>
      <TopLine />
      {!showExampleCV && <EditButton className='edit-btn_tr' />}
      <div className='cv-wrapper'>
        <div className='cv'>
          <Title className='cv__title' />
          <Avatar className='cv__avatar' />
          <main className='cv__main'>
            <AboutMe />
            <ExperienceList />
            <EducationList />
          </main>
          <aside className='cv__aside'>
            <ContactList />
            <TechnologyList />
            <LanguageList />
          </aside>
        </div>
      </div>
    </Layout>
  )
}

export default observer(CVPage)
