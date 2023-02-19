import React from 'react'

const Chat = () => {
  return (
    <>
        <div className="row">
          <div className=''>
            <button
              className="btn btn-success m-2"
              onClick={onReset}
              disabled={counters.length === 0 ? "disabled" : ""}
            >
              <i className="fa fa-refresh" aria-hidden="true" />
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={onRestart}
              disabled={counters.length !== 0 ? "disabled" : ""}
            >
              <i className="fa fa-recycle" aria-hidden="true" />
            </button>
          </div>
        </div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}

    </>
  )
}

export default Chat