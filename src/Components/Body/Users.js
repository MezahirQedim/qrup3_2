import React from 'react'

const Users = () => {

  const [users, setUsers] = React.useState([])


  // https://dummy.restapiexample.com/api/v1/employees

  // const loadData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(test =>  test.json())
  //   .then(response => setUsers(response))
  //   .catch(err => console.log(err))
  // }

  console.log(users)

  const loadData2 = async () => {
    	const users2 = await fetch("https://jsonplaceholder.typicode.com/users")

      const test = await users2.json()

      if(users2.status === 200 && users2.ok){
          setUsers(test)
      }else {

      }

  }


  


  React.useEffect(() => {
    loadData2()
  },[])


  return (
    <div>
      <button
        // onClick={loadData}
      >Data</button>
    </div>
  )
}

export default Users