/* eslint-disable no-unused-vars */
const APICall = async (rover, pickedTime, page = 1) => {
  let datePrefix = ''
  if (pickedTime?.length > 4) {
    datePrefix = `earth_date=${pickedTime}`
  } else {
    datePrefix = `sol=${pickedTime}`
  }
  const currentPage = `&page=${page}`
  const API = `&api_key=${process.env.REACT_APP_API_KEY}`

  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${datePrefix}${currentPage}${API}`

  const datos = await fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      return data.photos
    })
  return datos
}
export default APICall
