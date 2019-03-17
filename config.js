module.exports ={
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http://localhost:3000',
    JWT_SECRET: process.env.JWT_SECRET || '',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://metallica_api',
    MONGODB_URIAZURE: process.env.MONGODB_URIAZURE  || 'mongodb://',   
    COSMODDB_USER: process.env.COSMOSDB_PASSWORD || '',
    COSMOSDB_PASSWORD: process.env.COSMOSDB_PASSWORD || ''    
}