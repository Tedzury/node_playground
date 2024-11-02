import { Patient } from '../schema/patientSchema';

type CreateBodyType = {
	firstName: string;
	lastName: string;
	age: number;
	birthDate: string;
};

type UpdateBodyType = Partial<CreateBodyType>;

class PatientServiceClass {
	async getMany() {
		const patients = await Patient.find();
		return patients;
	}
	async getOne(id: string) {
		const patient = await Patient.findById(id);
		return patient;
	}
	async create(createBody: CreateBodyType) {
		const newPatient = new Patient(createBody);
		await newPatient.save();
		return newPatient;
	}
	async update(id: string, updateBody: UpdateBodyType) {
		const patient = await Patient.findByIdAndUpdate(id, updateBody, { new: true });

		return patient;
	}
	async delete(id: string) {
		await Patient.findByIdAndDelete(id);
	}
}

const patientService = new PatientServiceClass();

export { patientService };
