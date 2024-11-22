import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, LogIn, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthStore } from '@/store/authStore';

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: 'Courses', path: '/courses' },
  { name: 'Practice', path: '/practice' },
  { name: 'Community', path: '/community' },
  { name: 'Live Classes', path: '/live-classes' },
  { name: 'Tutoring', path: '/tutoring' }
];

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();

  const handleLogout = useCallback(() => {
    logout();
    navigate('/');
  }, [logout, navigate]);

  const handleLogin = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  const handleSignup = useCallback(() => {
    navigate('/signup');
  }, [navigate]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm" role="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2" aria-label="HebrewLearn Home">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-blue-500 rounded-full blur opacity-50" />
                <BookOpen className="relative h-8 w-8 text-brand-600" aria-hidden="true" />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-brand-600 to-blue-500 bg-clip-text text-transparent">
                HebrewLearn
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-2">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path}>
                  <Button
                    variant="secondary"
                    className={`text-gray-600 hover:text-brand-600 hover:bg-brand-50 ${
                      location.pathname === item.path ? 'bg-brand-50 text-brand-600' : ''
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              {isAuthenticated ? (
                <>
                  <span className="text-gray-600">Welcome, {user?.name}</span>
                  <Button variant="outline" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" onClick={handleSignup}>
                    Sign Up
                  </Button>
                  <Button 
                    variant="primary"
                    className="bg-gradient-to-r from-brand-500 to-blue-500 hover:from-brand-600 hover:to-blue-600"
                    onClick={handleLogin}
                  >
                    <LogIn className="mr-2 h-4 w-4" aria-hidden="true" />
                    Sign In
                  </Button>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="secondary"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <nav className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={toggleMenu}
                >
                  <Button
                    variant="secondary"
                    className={`w-full justify-start text-gray-600 hover:text-brand-600 hover:bg-brand-50 ${
                      location.pathname === item.path ? 'bg-brand-50 text-brand-600' : ''
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                {isAuthenticated ? (
                  <>
                    <span className="text-gray-600">Welcome, {user?.name}</span>
                    <Button variant="outline" onClick={handleLogout} className="w-full">
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" onClick={handleSignup} className="w-full">
                      Sign Up
                    </Button>
                    <Button 
                      variant="primary"
                      className="w-full bg-gradient-to-r from-brand-500 to-blue-500"
                      onClick={handleLogin}
                    >
                      <LogIn className="mr-2 h-4 w-4" aria-hidden="true" />
                      Sign In
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}