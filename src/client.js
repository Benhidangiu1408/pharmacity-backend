const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = './protos/service.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const client = new protoDescriptor.DatabaseService('localhost:50051', grpc.credentials.createInsecure());

const userId = 1; // Change this to test different IDs
client.GetUser({ id: userId }, (err, response) => {
  if (err) console.error(err);
  else console.log('User:', response);
});
