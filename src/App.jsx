// Utils
import "./App.css";
import { Suspense, lazy } from "react";

// Components
import Loading from "./components/Loading/Loading";

// Pages - Isso facilita pra se caso no futuro eu queira adicionar mais páginas de conteúdo no site
const Home = lazy(() => import("./pages/Home")); // Importação lazy para carregar a página Home apenas quando necessário

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </>
  );
}

export default App;
