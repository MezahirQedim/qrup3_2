import React from 'react'

const Form = () => {

    const [name, setName] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [work, setWork] = React.useState("")
    const [company, setCompany] = React.useState("")


    const Add = (e) => {
        e.preventDefault()
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            username: username,
            work: work,
            company: company
          })
  
        })
      }
  



  return (
    <form className='form-control w-50 m-auto bg-primary mt-1'  onSubmit={Add}>
        <label className='text-white'>
            Name
        </label>
        <input className='form-control' onChange={(e) => setName(e.target.value) }/>
        <label className='text-white'>
            Username
        </label>
        <input className='form-control' onChange={(e) => setUsername(e.target.value)}/>
        <label className='text-white'>
            Work
        </label>
        <input className='form-control'  onChange={(e) => setWork(e.target.value)}/>
        <label className='text-white'>
            Company
        </label>
        <input className='form-control'  onChange={(e) => setCompany(e.target.value)}/>

        <button className='btn btn-warning w-100 mt-2 fw-bold'>Submit</button>
        {/* <button className='btn btn-warning w-100 mt-2 fw-bold' type='button'>Submit 2</button> */}

    </form>
  )
}

export default Form;