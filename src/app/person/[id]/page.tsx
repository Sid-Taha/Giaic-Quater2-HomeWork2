import React from 'react'


function DynamicPage(props : {params: {id: string}}) {
  
  console.log("😡 i am Dynamic rendered" );
  
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      i am {props.params.id} of Dynamic route
      </div>
  )
}

export default DynamicPage