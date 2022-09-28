import "./App.css";
import { ErrorBoundary } from "./components/common/error/errorBoundries";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </div>
  );
}

export default App;
