import UserAccount from '@/views/Account/UserAccount.vue'
import UserSettings from '@/views/Settings/UserSettings'

const accountRoutes = [
  {
    path: "/compte",
    name: "account",
    component: UserAccount
  },
  {
    path: "/paramètres",
    name: "settings",
    component: UserSettings
  }
]

export default accountRoutes;