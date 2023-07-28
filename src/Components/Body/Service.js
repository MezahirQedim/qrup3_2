import React from 'react'

const Service = () => {


  const [userId, setUserId] = React.useState("")
  const [title, setTitle] = React.useState("")



    const Add = () => {

      fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "POST",
        body: JSON.stringify({
          userId: userId,
          title: title,
        })

      })
    }


    // React.useEffect(() => {
    //   Add()
    // }, [])


  return (
    <div>

      title
      <input onChange={(e) => setTitle(e.target.value)}/>

      userId


      <input onChange={(e) => setUserId(e.target.value)}/>

      <button
         
         onClick={Add}

      >
        
        Add
        
        </button>


    </div>
  )
}

export default Service