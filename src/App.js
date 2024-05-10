import './App.css'
import PageContent from './components/PageContent/pagecontent';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          
          <Sidebar />
          <PageContent />
          
        </div>
    </div>
  );
}

export default App;
