/**
 * Configuration file for SmartChoice application
 * This file loads environment variables and provides configuration settings
 */

// Load environment variables from .env file
require('dotenv').config();

// Configuration object
const config = {
    // Database configuration
    database: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        name: process.env.DB_NAME || 'smartchoice_db'
    },

    // API keys for different stores
    apiKeys: {
        darwin: process.env.DARWIN_API_KEY,
        orange: process.env.ORANGE_API_KEY,
        vodafone: process.env.VODAFONE_API_KEY,
        digi: process.env.DIGI_API_KEY
    },

    // JWT configuration
    jwt: {
        secret: process.env.JWT_SECRET || 'your-secret-key'
    },

    // Email configuration
    email: {
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: process.env.EMAIL_PORT || 587,
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASSWORD
    },

    // Admin credentials
    admin: {
        username: process.env.ADMIN_USERNAME || 'admin',
        password: process.env.ADMIN_PASSWORD
    },

    // Application settings
    app: {
        env: process.env.NODE_ENV || 'development',
        port: process.env.PORT || 3000
    },

    // Utility functions
    getDatabaseConnectionString: function() {
        return `mysql://${this.database.user}:${this.database.password}@${this.database.host}/${this.database.name}`;
    },

    getStoreApiKey: function(store) {
        return this.apiKeys[store.toLowerCase()];
    },

    isDevelopment: function() {
        return this.app.env === 'development';
    },

    isProduction: function() {
        return this.app.env === 'production';
    }
};

// Export the configuration
module.exports = config; 