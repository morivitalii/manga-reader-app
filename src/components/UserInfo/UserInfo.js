import { useState, useEffect } from 'react'

import axios from 'axios'

const UserInfo = () => {
  const [data, setData] = useState()

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/users/settings.json', {
        withCredentials: true,
      })
      .then((res) => console.log(res))
  }, [])

  return <div>User Info:</div>
}

export default UserInfo
