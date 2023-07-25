import SocialNetwoks from './SocialNetwoks'
import InformationContainer from './InformationContainer'

import Avatar from '../img/perfil.jpg'

import "../styles/components/sidebar.sass"


const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Daniel Scheffel" />
        <p className="title">Desenvolvedor</p>
        <SocialNetwoks />
        <InformationContainer />
        <a href="" className="btn">
          Dowload currículo
        </a>
    </aside>
  )
}

export default Sidebar