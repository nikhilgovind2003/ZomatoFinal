import React from 'react'

const tabOption = ({activeTab, setActiveTab}) => {
  return (
    <div>
      <button onClick={()=>{
        setActiveTab("NightLIfe")
      }}>NightLife</button>
    </div>
  )
}

export default tabOption