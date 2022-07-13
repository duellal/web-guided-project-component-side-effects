import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'

export default function Details(props) {
  const { friendId, close } = props
  const [details, setDetails] = useState(null)

  // 👉 TASK 4 - Create a side effect 🥇 that runs only after first render.

  useEffect(() => {
    //Task 4 - consoles when we hit the 'see details' button
    console.log('Side Effect on frist render')
    //Below renders when we hit the 'close' button
    return () => {
      console.log('Clean up right before unmount')
    }
  }, [])


  // 👉 TASK 5 - Create a side effect 👻 that runs only after first render
  // and puts a 'click' event handler on document.
  // See what happens if we don't clean up.

  useEffect(() => {
    //Task 5
    const clickListener = () => {
      console.log(`Random number ${Math.random()}`)
    }
    document.addEventListener('click', clickListener)

    return () => {
      document.removeEventListener('click', clickListener)
    }
  }, [])

  // 👉 TASK 6 - Create a side effect 🥵 that runs after every render.

  // useEffect(() => {
  //   console.log('Effect after DOM renders everytime')

  //   return () => {
  //     console.log('cleanup')
  //   }
  // })

  // 👉 TASK 7 - Create a side effect 📲 that runs when a particular variable changes:
  // Whenever props.friendId updates we should trigger a fetch for details of the friend.
  // The URL should end up looking like `http://localhost:4000/friends/1?api_key=xyz`
  // On success, shove the details of the friend in `details` slice of state

  useEffect(() => {
    axios
      .get(`${BASE_URL}/friends/${friendId}?api_key=${API_KEY}`)
      .then(res => {
        setDetails(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [friendId])
  //[friendId] above lets the api refire the effect with the correct id to let the details of the friends change when you click a different 'see details' button

  return (
    <div className='container'>
      <h2>Details (of friend with id {friendId}):</h2>
      {
        details &&
        <>
          <p>{details.name} is {details.age}</p>
          <p>email is {details.email}</p>
          {name} likes:
          <ul>
            {details.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
          </ul>
        </>
      }
      <button onClick={close}>Close</button>
    </div>
  )
}
