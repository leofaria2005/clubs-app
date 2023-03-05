import {useDispatch} from 'react-redux'
import {deleteClub} from '../features/clubs/clubSlice'
 
function ClubItem({club}) {
const dispatch = useDispatch()

  return (
    <div className='club'> 
      <h2>{club.name}</h2>
      <body>{club.description}</body>
      <button onClick={() => dispatch(deleteClub(club._id))} className="close">x</button>
    </div>
  )
}

export default ClubItem
