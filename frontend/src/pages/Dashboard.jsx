import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import ClubItem from "../components/ClubItem"
import Spinner from "../components/Spinner"
import { reset, getClubs } from "../features/clubs/clubSlice"

function DashBoard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {clubs, isLoading, isError, message} = useSelector((state) => state.clubs )

  useEffect(() => {
    if(isError) {
      console.log(message);
    }

    if(!user){
      navigate('/login')
    }

    dispatch(getClubs())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch ])

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
    <section className="heading">
      <h1>Welcome {user && user.name} </h1>
      <p>Clubs' dashboard</p>
    </section>
   


    <section className="content"> 
      {clubs.length > 0 ? (
        <div className="clubs">
          {clubs.map((club) => (
            <ClubItem key={club._id} club={club} />
          ))}
        </div>
      ) : (<h3> You have not joined any clubs </h3>)}
    </section>
    </>
  )
}

export default DashBoard
