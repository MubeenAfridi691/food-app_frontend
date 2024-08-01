import React from 'react'

function Card() {
  return (
    <div>
    <div className="card" style={{"width": "18rem","maxHeight":"360px"}}>
<img src="https://images.unsplash.com/photo-1533421821268-87e42c1d70b0?q=80&w=2703&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <div className='container w-100'>
    <select className='m-2 h-100 bg-success rounded'>
      {
        Array.from(Array(10).keys()).map((item, index) => {
          return (
            <option value={index} key={index}>{index}</option>
          )
        })
      }
    </select>
    <select className='m-2 h-100 bg-success rounded'>
      <option >Full</option>
      <option >Half</option>
    </select>
    <div className='d-inline'>Price</div>
  </div>
</div>
</div>
    
  </div>
  )
}

export default Card
