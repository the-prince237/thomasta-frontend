import PlacesOfLeisure from '@/views/Leisures/PlacesOfLeisure.vue'
import PlaceOfLeisure from '@/views/Leisures/PlaceOfLeisure/PlaceOfLeisure.vue'

const baseUrl = '/loisirs'

const leisuresRoutes = [
  {
    path: baseUrl,
    name: "placesOfLeisure",
    component: PlacesOfLeisure
  },
  {
    path: baseUrl+"/:placeId",
    name: "PlaceOfLeisure",
    component: PlaceOfLeisure
  }
]

export default leisuresRoutes