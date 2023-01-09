import SchoolSupport from '@/views/SchoolSupport/SchoolSupport.vue'
import LessonView from '@/views/SchoolSupport/Lesson/LessonView.vue'

const baseUrl = "/soutient-scholaire"

const schoolSupportRoutes = [
  {
    path: baseUrl,
    name: "schoolSupport",
    component: SchoolSupport
  },
  {
    path: baseUrl+"/:lessonId",
    name: "lesson",
    component: LessonView
  }
]

export default schoolSupportRoutes