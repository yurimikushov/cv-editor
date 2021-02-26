import { useEffect } from 'react'
import { useSaveAppProps } from './useSaveAppProps'
import { useSaveCV } from './useSaveCV'

const useSaveAppData = () => {
  const saveAppProps = useSaveAppProps()
  const saveCV = useSaveCV()

  useEffect(() => {
    const saveAppData = () => {
      saveAppProps()
      saveCV()
    }

    window.addEventListener('beforeunload', saveAppData)
    return () => window.removeEventListener('beforeunload', saveAppData)
  }, [])
}

export { useSaveAppData }
