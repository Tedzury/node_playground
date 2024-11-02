import { MongooseError } from 'mongoose';

const isMongooseError = (error: unknown): boolean => error instanceof MongooseError;

export { isMongooseError };
