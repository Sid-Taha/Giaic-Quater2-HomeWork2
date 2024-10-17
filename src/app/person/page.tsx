import Link from 'next/link';
import React from 'react'

async function PersonPage() {
 
  // Api call

  const url = "https://fakerapi.it/api/v1/persons?_locale=en_US&_quantity=1"
  const data = await fetch(url, {next : {revalidate : 20}})
  const person = await data.json()
  console.log("😁 i am static rendered" );
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Link href={`/person/${person.data[0].firstname}`}>
          <h1>i am {person.data[0].firstname} of static Route</h1>
      </Link>
      </div>
  )
}

export default PersonPage