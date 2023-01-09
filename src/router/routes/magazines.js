import MagazinesList from '@/views/Magazines/MagazinesList.vue'
import MagazineView from '@/views/Magazines/Magazine/MagazineView.vue'

const baseUrl = '/magazines'

const magazinesRoutes = [
  {
    path: baseUrl,
    name: "magazinesList",
    component: MagazinesList
  },
  {
    path: baseUrl+"/:magazineId",
    name: "magazine",
    component: MagazineView
  }
]

export default magazinesRoutes