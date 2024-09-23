import express from 'express';
import { config } from './config/config';
import { authMiddleware } from './middlewares/authMiddleware';
import { loggingMiddleware } from './middlewares/loggingMiddleware';
import { rateLimitingMiddleware } from './middlewares/rateLimitingMiddleware';
import { gatewayRoutes } from './routes/gatewayRoutes';

const app = express();

// Apply middlewares
app.use(loggingMiddleware);
app.use(rateLimitingMiddleware);
app.use(authMiddleware); // Optional, if you want to secure all routes

// Apply routes
app.use(gatewayRoutes);

// Start server
app.listen(config.port, () => {
  console.log(`Gateway running on port ${config.port}`);
});
