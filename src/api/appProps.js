const getAppProps = async () => {
  const editable = localStorage.getItem('app/editable')

  return {
    editable: editable !== null ? editable === 'true' : true,
    lang: localStorage.getItem('app/lang') || 'en',
  }
}

const saveAppProps = async ({ editable, lang }) => {
  localStorage.setItem('app/editable', editable)
  localStorage.setItem('app/lang', lang)

  return {
    status: 'ok',
  }
}

export { getAppProps, saveAppProps }
