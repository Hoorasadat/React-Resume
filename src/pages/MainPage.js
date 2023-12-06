import Profile from "../components/Profile";
import TechnicalProficiency from "../components/TechnicalProficiency";
import PersonalSkills from "../components/PersonalSkills";
import RelatedEducation from "../components/RelatedEducation";
import RelatedExperience from "../components/RelatedExperience";
import AdditionalEducation from "../components/AdditionalEducation";
import AdditionalExperience from "../components/AdditionalExperience";
import Repositories from "../components/Repositories";

import { useTheme } from '../components/ThemeContext';

function MainPage() {
	const { isDarkMode } = useTheme();

  const styles = {
    backgroundColor: isDarkMode === true ? 'black' : 'white',
    color: isDarkMode === true ? 'white' : 'black',
    border: isDarkMode === true ? '1px solid white' : '3px solid grey',
    borderRadius: isDarkMode === true ? '10px' : '10px',
  }

  return (
    <div>
      <div className="row mt-3">
        <Profile styles={styles}/>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="row mt-3">
            <PersonalSkills styles={styles}/>
          </div>
          <div className="row mt-4">
            <RelatedEducation styles={styles}/>
          </div>
        </div>

        <div className="col mt-3">
          <TechnicalProficiency styles={styles} />
        </div>
      </div>

      <div className="row mt-3">
        <RelatedExperience styles={styles} />
      </div>

      <div className="row mt-3">
        <AdditionalEducation styles={styles} />
      </div>

      <div className="row mt-3">
        <AdditionalExperience styles={styles} />
      </div>

      <div className="row mt-3">
        <Repositories styles={styles} />
      </div>
    </div>
  );
}

export default MainPage;
