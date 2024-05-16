import express, {Response, Request} from 'express'

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Agro-Input Store system api running properly.');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});