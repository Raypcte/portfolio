import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/socialnetworkcontainer.sass';

const socialNetworks = [
  {
    name: 'linkedin',
    icon: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/rayane-pacote/',
  },
  {
    name: 'github', icon: <FaGithub />,
    link: 'https://github.com/Raypcte'
  },
  {
    name: 'instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/dary.ray_',
  },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          target='_blank'
          href={network.link}
          className="social-btn"
          id={network.name}
          key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
