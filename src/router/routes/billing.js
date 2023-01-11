import RegBilling from '@/views/Billing/RegBilling.vue'

const baseUrl = "/facturation"

const billingRoutes = [
  {
    path: baseUrl,
    name: "billing",
    component: RegBilling
  }
]

export default billingRoutes