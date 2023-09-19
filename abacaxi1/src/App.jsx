import Header from "./componetes/Header/Header"

import ArticleList from "./componetes/ArticleList/ArticleList"
import { useState } from "react"
import Form from "./componetes/Form/Form"

const App = () => {
  const [user, setUser] = useState()
  const hasUser = Boolean(user)

  return (
    <div className="h-screen">
      <Header user={user} />
      {hasUser && <ArticleList />}
      {hasUser || <Form onSubmit={setUser} />}
    </div>
  )

}

export default App