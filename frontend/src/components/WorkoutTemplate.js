import React from 'react'
import useWorkoutsContext from '../hooks/useWorkoutsContext'  //use workouts context is a globally accessible hook that can be seen as a manager of global context management
import formateDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutTemplate = ({workout}) => {
  const {dispatch} = useWorkoutsContext()

  //This function's purpose is to communicate to the API, and delete the workout in question.
  const handleClick = async () => {
    //The following sends a request to the backend (in the form of fetch), and attaches the method of the request(DELETE) and the location of the workout in question in the database
    const response = await fetch('/api/workouts/' + workout._id, { 
        method: 'DELETE'
    })
    const json = await response.json()  //The delete request sends back a reponse, which has a json attached to it of the deleted workout.

    if (response.ok) {   //This check is important. It makes sure the request went through, so that if it did, it gaves the green light to update global context.
                          //Backend are not technically linked, but rather they run conccurently and must be programmed to stay in sync

        dispatch({type: "DELETE_WORKOUT", payload: json})  //This calls for the hook to take action, in the form of dispatch. To make sure the hook knows what to do, we tell it the type of action
                                                           //In this case, it needs to delete a workout (DELETE_WORKOUT), as well as which workout object to do it with (json payload)

        
    }

  }

  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps : </strong>{workout.reps}</p>
        <p>{formateDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
        <span className = "material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutTemplate