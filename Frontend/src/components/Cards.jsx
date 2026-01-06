import React from 'react'

function Cards({ item }) {
  return (
    <>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={item.image}
              alt={item.name}
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">
                {item.category}
              </div>
            </h2>

            <p>{item.title}</p>

            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                {item.price === 0 ? "Free" : `₹${item.price}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
