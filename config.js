module.exports ={
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http://localhost:3000',
    JWT_SECRET: process.env.JWT_SECRET || 'secret1',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://admin:admin123@ds041177.mlab.com:41177/metallica_api',
    MONGODB_URIAZURE: process.env.MONGODB_URIAZURE  || 'mongodb://au-e-dev-mongodb:DZu1R1O5DkrGph05xbCL5PRBOt7j9VpwubcwGVGLPtHkSKYzKaNzQQpHG4DEqEOU7R4CoSTmqzXVFwRLBmUSWw==@au-e-dev-mongodb.documents.azure.com:10255/?ssl=true&replicaSet=globaldb',
   // COSMOSDB_CONNSTR='mongodb://{cosmos-user}.documents.azure.com:10255/{dbname}',
    COSMODDB_USER: process.env.COSMOSDB_PASSWORD || 'au-e-dev-mongodb',
    COSMOSDB_PASSWORD: process.env.COSMOSDB_PASSWORD || 'DZu1R1O5DkrGph05xbCL5PRBOt7j9VpwubcwGVGLPtHkSKYzKaNzQQpHG4DEqEOU7R4CoSTmqzXVFwRLBmUSWw=='
    // mongodb://au-e-dev-mongodb:DZu1R1O5DkrGph05xbCL5PRBOt7j9VpwubcwGVGLPtHkSKYzKaNzQQpHG4DEqEOU7R4CoSTmqzXVFwRLBmUSWw==@au-e-dev-mongodb.documents.azure.com:10255/?ssl=true
}