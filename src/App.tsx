// Import router components from react-router-dom for handling navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import layout components
import { Navbar } from './components/layout/navbar';
import { Footer } from './components/layout/footer';

// Import main pages
import HomePage from './pages/home';
import LoginPage from './pages/auth/login';
import SignupPage from './pages/auth/signup';

// Import learning-related pages
import CoursesPage from './pages/courses';
import PracticePage from './pages/practice';
import LiveClassesPage from './pages/live-classes';
import TutoringPage from './pages/tutoring';
import StudyMaterialsPage from './pages/study-materials';
import PracticeTestsPage from './pages/practice-tests';

// Import community and interaction pages
import CommunityPage from './pages/community';
import ForumPage from './pages/forum';
import LanguageExchangePage from './pages/language-exchange';
import SuccessStoriesPage from './pages/success-stories';
import EventsPage from './pages/events';

// Import content pages
import BlogPage from './pages/blog';
import ReadingPage from './pages/reading';
import StoryPage from './pages/reading/[id]';

// Import support and legal pages
import HelpCenterPage from './pages/help-center';
import ContactPage from './pages/contact';
import TermsPage from './pages/terms';
import PrivacyPage from './pages/privacy';

// Main App component definition
function App() {
  return (
    // Router wrapper for handling client-side routing
    <Router>
      {/* Main container with minimum height and background color */}
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Global navigation bar */}
        <Navbar />

        {/* Main content area that grows to fill available space */}
        <main className="flex-grow">
          {/* Route configuration for the application */}
          <Routes>
            {/* Home route */}
            <Route path="/" element={<HomePage />} />

            {/* Authentication routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Learning feature routes */}
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/live-classes" element={<LiveClassesPage />} />
            <Route path="/tutoring" element={<TutoringPage />} />
            <Route path="/study-materials" element={<StudyMaterialsPage />} />
            <Route path="/practice-tests" element={<PracticeTestsPage />} />

            {/* Community feature routes */}
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/language-exchange" element={<LanguageExchangePage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/events" element={<EventsPage />} />

            {/* Content routes */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/reading" element={<ReadingPage />} />
            <Route path="/reading/:id" element={<StoryPage />} />

            {/* Support and legal routes */}
            <Route path="/help" element={<HelpCenterPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </main>

        {/* Global footer */}
        <Footer />
      </div>
    </Router>
  );
}

// Export the App component as the default export
export default App;