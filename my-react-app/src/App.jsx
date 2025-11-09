// 1. Import necessary modules (React, components, Tailwind imports if using a global stylesheet)
import React from 'react';
import Sidebar from './imports/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
// If you were importing a CSS file directly into this component (less common with Tailwind setup):
// import './App.css'; 

// 2. Define the functional component
const App = () => {
    // 3. (Optional) State and functions (Hooks) 
    const [theme, setTheme] = React.useState('light');

    // 4. Return the JSX (The structure of your application)
    return (
        // The root element often sets up the Tailwind CSS context (e.g., font, text color, background)
        // using utility classes like 'bg-gray-100' or 'font-sans'.
        <div className={`min-h-screen ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-900 text-white'}`}>
            
            {/* Components are composed here, using Tailwind classes internally */}
            <Header currentTheme={theme} toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />

            <main className="container mx-auto p-4">
                <MainContent />
            </main>

            <Footer />
        </div>
    );
};

// 5. Export the component
export default App;
