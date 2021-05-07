import express from 'express';
import healthRoutes from './health.routes';

const appRoutes = express();

const base = '/api/v1';

appRoutes.use(base, healthRoutes);

export default appRoutes;
