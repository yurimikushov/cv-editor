const getAppProps = async () => {
  const editable = localStorage.getItem('app/editable')

  return {
    editable: editable !== null ? editable === 'true' : true,
  }
}

const saveAppProps = async ({ editable }) => {
  localStorage.setItem('app/editable', editable)

  return {
    status: 'ok',
  }
}

export { getAppProps, saveAppProps }
