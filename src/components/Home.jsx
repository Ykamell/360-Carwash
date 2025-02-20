import Hero from './Hero'
import Services from './Services';
import Address from './Address';
import { Clients } from './Clients';
import { Community } from './Community';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Clients/>
      <Address /> 
      <Community/>
    </div>
  )
}
