import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { config } from '../config/config';

export const gatewayRoutes = express.Router();

// Appointments Service
gatewayRoutes.use('/appointments', createProxyMiddleware({
  target: config.appointmentServiceUrl,
  changeOrigin: true
}));

// Auth Service
gatewayRoutes.use('/auth', createProxyMiddleware({
  target: config.authServiceUrl,
  changeOrigin: true
}));

// Billing Service
gatewayRoutes.use('/billing', createProxyMiddleware({
  target: config.billingServiceUrl,
  changeOrigin: true
}));

// Add routes for other services similarly
