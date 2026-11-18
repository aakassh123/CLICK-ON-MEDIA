import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Click On Media App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          background: '#061448',
          color: '#ffffff',
          padding: '24px',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '540px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(0, 200, 255, 0.3)',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}>
            <h1 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px', color: '#FF7A00' }}>
              Click On Media
            </h1>
            <p style={{ fontSize: '15px', color: '#e2e8f0', marginBottom: '24px', lineHeight: 1.6 }}>
              A technical error occurred while loading this view.
            </p>
            <pre style={{
              background: '#040E32',
              padding: '14px',
              borderRadius: '12px',
              color: '#f87171',
              fontSize: '12px',
              textAlign: 'left',
              overflowX: 'auto',
              marginBottom: '20px'
            }}>
              {this.state.error?.message || String(this.state.error)}
            </pre>
            <button
              onClick={() => {
                window.location.hash = '';
                window.location.reload();
              }}
              style={{
                background: 'linear-gradient(135deg, #FF7A00, #FFB400)',
                color: '#ffffff',
                border: 'none',
                padding: '12px 28px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              Reload Website
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
