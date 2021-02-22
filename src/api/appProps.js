const getAppProps = () => {
  return new Promise((resolve) => {
    resolve({
      editable: localStorage.getItem('app/editable') === 'true',
    })
  })
}

const saveAppProps = ({ editable }) => {
  return new Promise((resolve) => {
    localStorage.setItem('app/editable', editable)

    resolve({ status: 'ok' })
  })
}

export { getAppProps, saveAppProps }
