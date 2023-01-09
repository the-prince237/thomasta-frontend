import AllAccommodations from '@/views/Accommodations/AllAccommodations.vue'
import SingleAccommodation from '@/views/Accommodations/Accommodation/SingleAccommodation.vue'

const baseUrl = "/hebergements"

const accommodationsRoutes = [
  {
    path: baseUrl,
    name: "accommodations",
    component: AllAccommodations
  },
  {
    path: baseUrl+"/:accId",
    name: "accomodation",
    component: SingleAccommodation
  }
]

export default accommodationsRoutes;