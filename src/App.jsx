import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollManager } from './components/ScrollManager';
import { useDocumentMeta } from './hooks/useDocumentMeta';
import { Home } from './pages/Home';
import { DesignPage } from './pages/DesignPage';
import { PhotographyPage } from './pages/PhotographyPage';
import { NotFound } from './pages/NotFound';

const META = {
  '/': {
    title: 'Gabriel Soler | AI & Trading',
    description:
      "Portfolio of Gabriel Soler — Queen's Math and Engineering student focused on AI and Trading, with experience across quantitative research, algorithmic trading, and full-stack software engineering.",
  },
  '/design': {
    title: 'Design | Gabriel Soler',
    description:
      'Graphic design portfolio of Gabriel Soler — branding, typography, and digital art.',
  },
  '/photography': {
    title: 'Photography | Gabriel Soler',
    description:
      'Photography portfolio of Gabriel Soler — cars, detail, and light.',
  },
};

export function App() {
  const { pathname } = useLocation();
  const meta = META[pathname] ?? META['/'];
  useDocumentMeta(meta.title, meta.description);

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
