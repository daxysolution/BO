import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotificationSystem from './components/NotificationSystem';
import LoadingOverlay from './components/LoadingOverlay';
import { useUIStore } from './stores/uiStore';
import { config } from './config';

// Desactivar mensajes de desarrollo de React
if (!config.showDevLogs) {
    console.log = () => { };
    console.warn = () => { };
    console.info = () => { };
}

const GlobalComponents = () => {
    const { notifications, removeNotification, isLoading, loadingMessage } = useUIStore();

    return (
        <>
            <NotificationSystem
                notifications={notifications}
                onClose={removeNotification}
            />
            <LoadingOverlay isLoading={isLoading} message={loadingMessage} />
        </>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
        <GlobalComponents />
    </React.StrictMode>
); 