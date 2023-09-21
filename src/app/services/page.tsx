import { withAuthorization } from "@/modules/auth/withAuthorization"
import { ServicesPage } from "./ServicesPage"

export const metadata = {
  title: "ClientX - Services",
  description: "Generated by create next app",
}

const PrivatePage = () => withAuthorization(ServicesPage)
export default PrivatePage
