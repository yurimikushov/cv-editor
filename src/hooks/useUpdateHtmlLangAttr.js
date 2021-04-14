import { useMemo } from 'react'
import { reaction } from 'mobx'
import { useStore } from '../store'

const useUpdateHtmlLangAttr = () => {
  const { appProps } = useStore()

  const htmlNode = useMemo(() => {
    return document.querySelector('html')
  }, [])

  reaction(
    () => appProps.lang,
    (lang) => htmlNode.setAttribute('lang', lang)
  )
}

export { useUpdateHtmlLangAttr }
