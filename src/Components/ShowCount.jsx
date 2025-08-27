import './ShowCount.css'

function ShowCount({ value }) {
  return (
    <div className='show-count'>
      <p>
        You clicked here {value} {value === 1 ? 'time' : 'times'}
      </p>
    </div>
  )
}

export default ShowCount
