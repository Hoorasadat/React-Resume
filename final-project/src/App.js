import './App.css';
import Header from './Header';
import WorkExperience from './WorkExperience';
import Education from './Education';
import TechnologySummary from './TechnologySummary';

function App() {
  return (
    <div className="container">
      <Header />
      <div class="row mt-3">
        <WorkExperience />
        <Education />
      </div>
      <TechnologySummary />
    </div>
  );
}

export default App;
