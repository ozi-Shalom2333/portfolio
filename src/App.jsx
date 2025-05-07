import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/Theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        <title>[Your Name] - Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of [Your Name], a frontend developer skilled in React, JavaScript, and modern web technologies."
        />
        <meta name="keywords" content="frontend developer, React, JavaScript, portfolio, web development" />
        <meta name="author" content="[Your Name]" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Router>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;