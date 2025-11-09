import React from 'react';
import Sidebar from './imports/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
const App = () => {
    const [theme, setTheme] = React.useState('light');

    return (
        <div className={`min-h-screen ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-900 text-white'}`}>
            
            <Header currentTheme={theme} toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />

            <main className="container mx-auto p-4">
                <MainContent />
            </main>

            <Footer />
        </div>
    );
};

export default App;
