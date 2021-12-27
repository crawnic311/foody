import React, { useState } from 'react'

const Create = () => {
  const [recipe, setRecipe] = useState({
    userId: 0,
    title: '',
    instructions: '',
  })

  return <div>This is the create page.</div>
}

export default Create
