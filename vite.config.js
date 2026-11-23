import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Development API Mock Plugin for local verification without requiring remote serverless functions
const localApiPlugin = () => ({
  name: 'local-api-endpoints',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url.startsWith('/api/') && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });
        req.on('end', () => {
          res.setHeader('Content-Type', 'application/json');
          try {
            const data = JSON.parse(body || '{}');
            if (req.url === '/api/enquiry') {
              if (!data.name || (!data.email && !data.phone)) {
                res.statusCode = 400;
                res.end(JSON.stringify({ success: false, error: 'Name and Phone/Email are required.' }));
                return;
              }
              const referenceId = `COM-${Date.now().toString(36).toUpperCase()}`;
              console.log(`[LOCAL_DEV_API] Enquiry received:`, data.name, data.phone || data.email);
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, message: 'Proposal request received successfully.', referenceId }));
              return;
            }
            if (req.url === '/api/consultation') {
              if (!data.name || !data.email || !data.phone || !data.date) {
                res.statusCode = 400;
                res.end(JSON.stringify({ success: false, error: 'Name, Email, Phone and Date are required.' }));
                return;
              }
              console.log(`[LOCAL_DEV_API] Consultation request:`, data.name, data.date, data.time);
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, message: 'Consultation request received successfully.' }));
              return;
            }
            if (req.url === '/api/newsletter') {
              if (!data.email || !data.email.includes('@')) {
                res.statusCode = 400;
                res.end(JSON.stringify({ success: false, error: 'Valid email required.' }));
                return;
              }
              console.log(`[LOCAL_DEV_API] Newsletter subscriber:`, data.email);
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, message: 'Subscribed successfully!' }));
              return;
            }
          } catch (e) {
            res.statusCode = 400;
            res.end(JSON.stringify({ success: false, error: 'Invalid JSON payload.' }));
            return;
          }
          next();
        });
      } else {
        next();
      }
    });
  }
});

export default defineConfig({
  base: '/',
  plugins: [react(), localApiPlugin()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: false,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          if (id.includes('src/data/')) {
            return 'site-data';
          }
        }
      }
    }
  }
});
