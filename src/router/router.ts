import { Router, Request, Response } from 'express';
import { patientController } from '../controller/patientController';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
	patientController.create(req, res);
});

router.get('/', async (req: Request, res: Response) => {
	patientController.getMany(req, res);
});
router.get('/:id', async (req: Request, res: Response) => {
	patientController.getOne(req, res);
});
router.put('/:id', async (req: Request, res: Response) => {
	patientController.update(req, res);
});
router.delete('/:id', async (req: Request, res: Response) => {
	patientController.delete(req, res);
});

export { router };
