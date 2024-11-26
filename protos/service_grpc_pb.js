// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_service_pb = require('../protos/service_pb.js');

function serialize_UserResponse(arg) {
  if (!(arg instanceof protos_service_pb.UserResponse)) {
    throw new Error('Expected argument of type UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UserResponse(buffer_arg) {
  return protos_service_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_no(arg) {
  if (!(arg instanceof protos_service_pb.no)) {
    throw new Error('Expected argument of type no');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_no(buffer_arg) {
  return protos_service_pb.no.deserializeBinary(new Uint8Array(buffer_arg));
}


var DatabaseServiceService = exports.DatabaseServiceService = {
  fetchUser: {
    path: '/DatabaseService/FetchUser',
    requestStream: false,
    responseStream: false,
    requestType: protos_service_pb.no,
    responseType: protos_service_pb.UserResponse,
    requestSerialize: serialize_no,
    requestDeserialize: deserialize_no,
    responseSerialize: serialize_UserResponse,
    responseDeserialize: deserialize_UserResponse,
  },
};

exports.DatabaseServiceClient = grpc.makeGenericClientConstructor(DatabaseServiceService);
