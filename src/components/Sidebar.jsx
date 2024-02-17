import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/Rayanep.jpeg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Rayane Pacote" />
      <div className="infos-container">
        <SocialNetworkContainer />
        <p className="title">Desenvolvedora e Analista de dados</p>
        <InformationContainer />
        <a href="#" className="btn">
          Download currículo
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
