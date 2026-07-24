import {workoutProgram as training_plan} from '../ultils/index.js';

export default function Grid() {

  const isLocked = false;

  return (
    <div className="training-grid-plan">
      {Object.keys(training_plan).map((workout, workoutIndex) => {
        const day = String(workoutIndex + 1).padStart(2, '0');
        
        return (
        <div className="training-plan-grid">
            {Object.keys(training_plan).map((workout, workoutIndex) => {
                const isLocked = workoutIndex === 0 ?
                    false :
                    !completedWorkouts.includes(`${workoutIndex - 1}`)
                console.log(workoutIndex, isLocked)

                const type = workoutIndex % 3 === 0 ?
                    'Push' :
                    workoutIndex % 3 === 1 ?
                        'Pull' :
                        'Legs'

                const trainingPlan = training_plan[workoutIndex]
                const dayNum = ((workoutIndex / 8) <= 1) ? '0' + (workoutIndex + 1) : workoutIndex + 1
                const icon = workoutIndex % 3 === 0 ? (
                    <i className='fa-solid fa-dumbbell'></i>
                ) : (
                    workoutIndex % 3 === 1 ? (
                        <i className='fa-solid fa-weight-hanging'></i>
                    ) : (
                        <i className='fa-solid fa-bolt'></i>
                    )
                )
            )}
            <div className='plan-card-header'>
                <h4><b>{type}</b></h4>
            </div>
          </button>
        );
      })}
    </div>
  );
}
