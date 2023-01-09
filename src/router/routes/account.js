import UserAccount from '@/views/Account/UserAccount.vue'

const baseUrl = "/compte"

const accountRoutes = [
  {
    path: baseUrl,
    name: "account",
    component: UserAccount
  },
]

export default accountRoutes;