import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import './styles/components/app.sass';

function App() {
  return (
    <div id="portfolio">
      <div className="cover"/>
      <h1 className="title-name">Rayane Pacote</h1>
      <div className="main-container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
