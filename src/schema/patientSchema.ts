import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	firstName: {
		type: String,
		required: [true, 'Patient first name is required'],
		trim: true,
		minLength: [2, 'First name must be at least 2 characters long.'],
		maxLength: [20, 'First name cant be longer than 20 characters '],
	},
	lastName: {
		type: String,
		required: [true, 'Patient last name is required'],
		trim: true,
		minLength: [2, 'Last name must be at least 2 characters long.'],
		maxLength: [20, 'Last name cant be longer than 20 characters '],
	},
	birthDate: {
		type: Date,
		required: [true, 'Birth date is required'],
	},
});

const Patient = mongoose.model('Patient', patientSchema);

export { patientSchema, Patient };
