import AllCeremonyRooms from '@/views/Ceremonies/AllCeremonyRooms.vue'
import CeremonyRoom from '@/views/Ceremonies/CeremonyRoom/CeremonyRoom.vue'

const baseUrl = "/salle-de-ceremonie"

const ceremonieRoutes = [
  {
    path: baseUrl,
    name: "ceremonyRooms",
    component: AllCeremonyRooms
  },
  {
    path: baseUrl+"/:roomId",
    name: "CeremonyRoom",
    component: CeremonyRoom
  }
]

export default ceremonieRoutes