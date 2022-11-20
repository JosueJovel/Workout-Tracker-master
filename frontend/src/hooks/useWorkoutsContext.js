import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";


const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)

  if (!context) {
    throw Error('useWorkoutsContext must be used inside a WorkoutContext Provider')
  }

  return context
}

export default useWorkoutsContext
