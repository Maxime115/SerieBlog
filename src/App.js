import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import styles from "./App.module.scss";


function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      
        <Header />
        <Suspense>
          <Homepage/>
        </Suspense>
        <Footer />
  
    </div>
  );
}

export default App;
