const getAppProps = () => {
  return new Promise((resolve) => {
    const editable = localStorage.getItem('app/editable')

    resolve({
      editable: editable !== null ? editable === 'true' : true,
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
