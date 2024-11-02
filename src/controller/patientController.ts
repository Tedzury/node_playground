import { Request, Response } from 'express';
import { MongooseError } from 'mongoose';
import { isMongooseError } from '../utils/isMongooseError';
import { patientService } from '../service/patientService';

class PatientControllerClass {
	async getMany(_: Request, res: Response) {
		try {
			const patients = await patientService.getMany();
			return res.json(patients);
		} catch (e: unknown) {
			const isMongoErr = isMongooseError(e);
			if (isMongoErr) {
				const error = e as MongooseError;
				res.status(500).send({ message: error.message });
			} else {
				console.log(e);
				res.status(500).send({ message: 'Internal server error' });
			}
		}
	}
	async getOne(req: Request, res: Response) {
		try {
			const { id } = req.params;
			if (!id) {
				return res.status(400).json({ message: 'You must specify the ID' });
			}
			const patient = await patientService.getOne(id);
			if (!patient) return res.status(404).json({ message: 'There is no user with specified ID' });

			return res.json(patient);
		} catch (e: unknown) {
			const isMongoErr = isMongooseError(e);
			if (isMongoErr) {
				const error = e as MongooseError;
				res.status(500).send({ message: error.message });
			} else {
				console.log(e);
				res.status(500).send({ message: 'Internal server error' });
			}
		}
	}
	async create(req: Request, res: Response) {
		try {
			const newPatient = await patientService.create(req.body);
			res.status(201).json(newPatient);
		} catch (e: unknown) {
			const isMongoErr = isMongooseError(e);
			if (isMongoErr) {
				const error = e as MongooseError;
				res.status(500).send({ message: error.message });
			} else {
				console.log(e);
				res.status(500).send({ message: 'Internal server error' });
			}
		}
	}
	async update(req: Request, res: Response) {
		try {
			const { id } = req.params;
			if (!id) {
				return res.status(400).json({ message: 'You must specify the ID' });
			}

			const patient = await patientService.update(id, req.body);
			if (!patient) return res.status(404).json({ message: 'There is no user with specified ID' });

			return res.json(patient);
		} catch (e: unknown) {
			const isMongoErr = isMongooseError(e);
			if (isMongoErr) {
				const error = e as MongooseError;
				res.status(500).send({ message: error.message });
			} else {
				console.log(e);
				res.status(500).send({ message: 'Internal server error' });
			}
		}
	}
	async delete(req: Request, res: Response) {
		try {
			const { id } = req.params;
			if (!id) {
				return res.status(400).json({ message: 'You must specify the ID' });
			}
			await patientService.delete(id);

			return res.status(204).end();
		} catch (e: unknown) {
			const isMongoErr = isMongooseError(e);
			if (isMongoErr) {
				const error = e as MongooseError;
				res.status(500).send({ message: error.message });
			} else {
				console.log(e);
				res.status(500).send({ message: 'Internal server error' });
			}
		}
	}
}

const patientController = new PatientControllerClass();

export { patientController };
