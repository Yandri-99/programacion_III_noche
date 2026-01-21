/*import './App.css'
import ImageAvatars from './labs/ImageAvatars'
import TestMui from './labs/TestMui'
import PublicLayout from './components/public/PublicLayout'
import PublicHeader from './components/public/PublicHeader'
import PublicFooter from './components/public/PublicFooter'


export default function App() {
  return (
    <div>
      <ImageAvatars />
      <TestMui />
      <PublicLayout />
      <PublicHeader />
      <PublicFooter />
    </div>
  )
}

import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes/app.routes";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  const element = useRoutes(appRoutes);
  return <AuthProvider>{element}</AuthProvider>;
}
*/

import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes/app.routes";
import { AuthProvider } from "./context/AuthContext";
import { UiProvider } from "./context/UiContext";

export default function App(): JSX.Element {
  const element = useRoutes(appRoutes);

  return (
    <AuthProvider>
      <UiProvider>{element}</UiProvider>
    </AuthProvider>
  );
}