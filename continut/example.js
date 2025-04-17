// Import the configuration
const config = require('./config');

// Example function to demonstrate using environment variables
function initializeApplication() {
    console.log('Initializing SmartChoice application...');
    
    // Using database configuration
    console.log('\nDatabase Configuration:');
    console.log('Host:', config.database.host);
    console.log('Database:', config.database.name);
    
    // Using API keys
    console.log('\nAPI Keys:');
    console.log('Darwin API Key:', config.apiKeys.darwin);
    console.log('Orange API Key:', config.apiKeys.orange);
    
    // Using JWT configuration
    console.log('\nJWT Configuration:');
    console.log('Secret:', config.jwt.secret);
    
    // Using email configuration
    console.log('\nEmail Configuration:');
    console.log('Host:', config.email.host);
    console.log('Port:', config.email.port);
    console.log('User:', config.email.user);
    
    // Using admin credentials
    console.log('\nAdmin Credentials:');
    console.log('Username:', config.admin.username);
    
    // Using application settings
    console.log('\nApplication Settings:');
    console.log('Environment:', config.app.env);
    console.log('Port:', config.app.port);
    
    // Using utility functions
    console.log('\nUtility Functions:');
    console.log('Database Connection String:', config.getDatabaseConnectionString());
    console.log('Store API Key (Darwin):', config.getStoreApiKey('darwin'));
}

// Run the example
initializeApplication(); 