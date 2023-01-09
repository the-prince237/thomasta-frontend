import StoreView from '@/views/Store/StoreView.vue'
import ProductView from '@/views/Store/Product/ProductView.vue'

const baseUrl = "/boutique"

const storeRoutes = [
  {
    path: baseUrl,
    name: "store",
    component: StoreView
  },
  {
    path: baseUrl+"/:productId",
    name: "product",
    component: ProductView
  }
]

export default storeRoutes