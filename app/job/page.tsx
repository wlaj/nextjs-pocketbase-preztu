import React from 'react'

type Props = {
  id: number,
  title: string,
  created: string,
  function: string,
  hours: number,
  salary: string,
  description: string
}

const getJob = async () => {
  const response = await fetch('http://127.0.0.1:8090/api/collections/jobs/records')
  return response.json()
}

export default async function page() {
  const job = await getJob()
  return (
    <>
      {job.items.map((item: Props) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.created}</p>
          <p>{item.function}</p>
          <p>{item.hours}</p>
          <p>{item.salary}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  )
}