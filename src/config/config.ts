export const config = {
    authServiceUrl: 'http://auth-service-url',
    appointmentServiceUrl: 'http://appointments-service-url',
    billingServiceUrl: 'http://billing-service-url',
    // Add other service URLs here
    port: process.env.PORT || 5000,
    jwtSecret: 'your_secret_key'
  };
  