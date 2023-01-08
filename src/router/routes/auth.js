import UserAuth from '@/views/Auth/UserAuth.vue'
import ResetPassword from '@/views/ResetPassword/ResetPassword'
import AuthResponse from '@/views/AuthResponse/AuthResponse'

const baseUrl = "/auth"

const authRoutes = [
  {
    path: baseUrl,
    name: "authentication",
    component: UserAuth
  },
  {
    path: baseUrl+"/reset-password",
    name: "resetPassword",
    component: ResetPassword
  },
  {
    path: baseUrl+"/:authResp",
    name: "authResponse",
    component: AuthResponse
  }
]

export default authRoutes;