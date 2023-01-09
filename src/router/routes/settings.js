import UserSettings from '@/views/Settings/UserSettings.vue'

const baseUrl = "/parametres"

const settingsRoutes = [
  {
    path: baseUrl,
    name: "settings",
    component: UserSettings
  }
]

export default settingsRoutes