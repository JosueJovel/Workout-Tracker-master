import React, { useEffect } from 'react'
import WorkoutTemplate from '../components/WorkoutTemplate'
import WorkoutForm from '../components/WorkoutForm'
import useWorkoutsContext from '../hooks/useWorkoutsContext'

const Home = () => { 
  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => { //this hook will fetch workouts from the backend API
    const fetchWorkouts = async () => { //contains all logic that actually does the fetching

      const response = await fetch('/api/workouts') 
      
      const json = await response.json() 

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()

  }, [dispatch]) 

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (  
          <WorkoutTemplate key={workout._id} workout={workout}/>
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home