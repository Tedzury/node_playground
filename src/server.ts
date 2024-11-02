import { app } from './app';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const port = process.env.PORT;
const dbUrl = process.env.DB_URL;

const main = async () => {
	try {
		await mongoose.connect(dbUrl);
		app.listen(port, () => {
			console.log(`Server is running on http://localhost:${port}.`);
		});
	} catch (e) {
		console.log(e);
	}
};

main();
