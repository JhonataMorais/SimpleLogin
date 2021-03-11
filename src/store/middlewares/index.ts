import { loggerMiddleware } from './logger';
import { sagaMiddleware } from './saga';

const middlewares = [sagaMiddleware, loggerMiddleware];

export * from './saga';
export * from './logger';

export default middlewares;
