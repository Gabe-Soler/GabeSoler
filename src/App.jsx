import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollManager } from './components/ScrollManager';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import { Home } from './pages/Home';
import { DesignPage } from './pages/DesignPage';
import { PhotographyPage } from './pages/PhotographyPage';
import { NotFound } from './pages/NotFound';

// Page titles by route. The prerender script uses these for each page's static HTML.
export const TITLES = {
  '/': 'Gabriel Soler | AI & Trading',
  '/design': 'Design | Gabriel Soler',
  '/photography': 'Photography | Gabriel Soler',
};

export function App() {
  const { pathname } = useLocation();
  useDocumentTitle(TITLES[pathname] ?? TITLES['/']);

  return (
    <>
      <ScrollManager />
      <Header />
      <main id="top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/photography" element={<PhotographyPage />} />

          {/* Legacy URLs from the static build. */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/design.html" element={<Navigate to="/design" replace />} />
          <Route path="/photography.html" element={<Navigate to="/photography" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
