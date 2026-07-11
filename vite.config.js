/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Custom Vite server plugin to allow local file writing
const viteLocalPortfolioPlugin = () => ({
  name: 'vite-local-portfolio-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const parseJsonBody = (req) => {
        return new Promise((resolve) => {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              resolve(JSON.parse(body));
            } catch {
              resolve(null);
            }
          });
        });
      };

      if (req.method === 'POST' && req.url === '/api/admin/save') {
        parseJsonBody(req).then(body => {
          if (!body || !body.type || !body.data) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Invalid request body' }));
            return;
          }

          let filePath = '';
          if (body.type === 'projects') {
            filePath = path.resolve(__dirname, 'src/assets/data/projects.json');
          } else if (body.type === 'certifications') {
            filePath = path.resolve(__dirname, 'src/assets/data/certifications.json');
          } else if (body.type === 'experiences') {
            filePath = path.resolve(__dirname, 'src/assets/data/experiences.json');
          } else {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Unknown file type' }));
            return;
          }

          try {
            // Ensure the target directory exists
            const dir = path.dirname(filePath);
            if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir, { recursive: true });
            }

            fs.writeFileSync(filePath, JSON.stringify(body.data, null, 2), 'utf-8');
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
        return;
      }

      if (req.method === 'POST' && req.url === '/api/admin/upload-image') {
        parseJsonBody(req).then(body => {
          if (!body || !body.filename || !body.base64) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Missing filename or base64 data' }));
            return;
          }

          try {
            const base64Data = body.base64.replace(/^data:image\/\w+;base64,/, "");
            const buffer = Buffer.from(base64Data, 'base64');
            
            const uploadDir = path.resolve(__dirname, 'public/uploads');
            if (!fs.existsSync(uploadDir)) {
              fs.mkdirSync(uploadDir, { recursive: true });
            }

            const ext = path.extname(body.filename) || '.png';
            const baseName = path.basename(body.filename, ext).replace(/[^a-zA-Z0-9]/g, '-');
            const finalFilename = `${baseName}-${Date.now()}${ext}`;
            const destPath = path.join(uploadDir, finalFilename);

            fs.writeFileSync(destPath, buffer);
            
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, path: `/uploads/${finalFilename}` }));
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
        return;
      }

      next();
    });
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteLocalPortfolioPlugin()],
})
