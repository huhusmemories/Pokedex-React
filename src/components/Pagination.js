import './Pagination.css'

export default function Pagination({goToNextPage, goToPrevPage}) {
  return (
    <div className='padding-5'>
      <button className='button-prev-next' onClick={goToPrevPage}>Previous</button>
      <button className='button-prev-next' onClick={goToNextPage}>Next</button>
    </div>
  )
}
