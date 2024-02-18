import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/Rayanep.jpeg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/rayane-pacote/"
        className="avatar"
      >
        <img src={Avatar} alt="Rayane Pacote" />
      </a>
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
