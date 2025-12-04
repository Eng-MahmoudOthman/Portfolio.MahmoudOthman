
import { Helmet } from 'react-helmet'

export default function CustomTitle({title}) {
   return (
      <Helmet>
         <title> Mahmoud Othman   |   {title}</title>
      </Helmet>
   )
}
