import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import TechnicalProficiency from "./components/TechnicalProficiency";
import PersonalSkills from "./components/PersonalSkills";
import RelatedEducation from "./components/RelatedEducation";
import RelatedExperience from "./components/RelatedExperience";
import AdditionalEducation from "./components/AdditionalEducation";
import AdditionalExperience from "./components/AdditionalExperience";
import Repositories from "./components/Repositories";

function App() {
  return (
    <div className="container App">
      <Header />

      <div className="row mt-3">
        <Profile />
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="row mt-3">
            <PersonalSkills />
          </div>
          <div className="row mt-3">
            <RelatedEducation />
          </div>
        </div>

        <div className="col mt-3">
          <TechnicalProficiency />
        </div>
      </div>

      <div className="row mt-3">
        <RelatedExperience />
      </div>

      <div className="row mt-3">
        <AdditionalEducation />
      </div>

      <div className="row mt-3">
        <AdditionalExperience />
      </div>

      <div className="row mt-3">
        <Repositories />
      </div>

    </div>
  );
}

export default App;
