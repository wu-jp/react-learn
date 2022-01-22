import React, { useState } from "react"
import { Routes, Route, Link, useSearchParams } from "react-router-dom"
export default function App() {
  return (
    <div className="App">
      <h1>Search Params Example</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

function randomUser() {
  let users = ["chaance", "jacob-ebey", "mcansh", "mjackson", "ryanflorence", "wu-jp", "wopen"]
  return users[Math.floor(Math.random() * users.length)]
}

function Home() {
  let [searchParams, setSearchParams] = useSearchParams()
  let user = searchParams.get("user")
  let [userData, setUserData] = useState(null)

  React.useEffect(() => {
    console.log("执行副作用")
    let abortController = new AbortController()

    async function getGitHubUser() {
      let response = await fetch(`https://api.github.com/users/${user}`, {
        signal: abortController.signal,
      })
      if (!abortController.signal.aborted) {
        let data = await response.json()
        setUserData(data)
      }
    }

    if (user) {
      getGitHubUser()
    }
    return () => {
      console.log("清除副作用")
      abortController.abort()
    }
  }, [user])

  function handleSubmit(event) {
    event.preventDefault()
    let formData = new FormData(event.currentTarget)
    let newUser = formData.get("user")
    if (!newUser) return
    setSearchParams({ user: newUser })
  }
  function handleRandomSubmit(event) {
    event.preventDefault()
    let newUser = randomUser()
    // our new random user is the same as our current one, let's try again
    if (newUser === user) {
      handleRandomSubmit(event)
    } else {
      setSearchParams({ user: newUser })
    }
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <form onSubmit={handleSubmit}>
          <label>
            <input defaultValue={user ?? undefined} type="text" name="user" />
            <button type="submit">Search</button>
          </label>
        </form>
        <form onSubmit={handleRandomSubmit}>
          <input type="hidden" name="random" />
          <button type="submit">Random</button>
        </form>
      </div>
      {userData && (
        <div
          style={{
            padding: "24px",
            margin: "24px 0",
            borderTop: "1px solid #eaeaea",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <img
            style={{ borderRadius: "50%" }}
            width={200}
            height={200}
            src={userData.avatar_url}
            alt={userData.login}
          />
          <div>
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}
