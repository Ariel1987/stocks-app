const formatDate = () => {
  const date = new Date()
  const now = Date.now(date)

  const day = new Date(now).getHours() < 18 ? new Date(now).getDate() - 1 : new Date(now).getDate()
  const month = new Date(now).getMonth() + 1
  const year = new Date(now).getFullYear()
  const formatedDate = `${year}-0${month}-${day}`

  return formatedDate
}

export default formatDate