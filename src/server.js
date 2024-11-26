const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { fetchUsers } = require('./services');

// Load .proto file
const PROTO_PATH = './protos/service.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const databaseService = protoDescriptor.DatabaseService;

// Start the gRPC server
const server = new grpc.Server();
server.addService(databaseService.service, { GetUser: fetchUsers });

const PORT = 50051;
server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) throw err;
  console.log(`gRPC server running on port ${port}`);
  server.start();
});
