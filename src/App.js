import './App.css';
import { flexCol, centerContent, flexRow } from './Assets/index';
import { Header, Main, Footer} from './Layouts/index';

function App() {
  return (
    <div className={`giphy ${flexCol} ${centerContent}`}
      style={{height: '100vh'}}>
      <Header />
      <div className={`flex-1 ${flexRow} ${centerContent}`}>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
