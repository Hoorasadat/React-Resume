import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

import { ThemeProvider} from "./components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="container App pt-3">
        <Header />
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
