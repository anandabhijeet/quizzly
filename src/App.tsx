import HomeLayout from "./Layout";
import { BrowserRouter as Router } from "react-router-dom";
import QuizDashboardRoutes from "./routes/routes";
function App() {
  return (
    <Router>
      <HomeLayout>
           <QuizDashboardRoutes/>
    </HomeLayout>
    </Router>
  );
}

export default App;
