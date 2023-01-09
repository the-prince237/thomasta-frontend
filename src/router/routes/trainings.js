import TrainingsList from '@/views/Trainings/TrainingsList.vue'
import TrainingView from '@/views/Trainings/Training/TrainingView.vue'

const baseUrl = "/formations"

const trainingsRoutes = [
  {
    path: baseUrl,
    name: "trainings",
    component: TrainingsList
  },
  {
    path: baseUrl+"/:trainingName",
    name: "training",
    component: TrainingView
  }
]

export default trainingsRoutes