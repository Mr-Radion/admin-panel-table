import { createAction } from '@reduxjs/toolkit';

const FETCH_WORKERS = 'WORKERS/FETCH';
const REQUESTED_WORKERS_SUCCEEDED = 'WORKERS/REQUESTED_SUCCEEDED';
const REQUESTED_WORKERS_FAILED = 'WORKERS/REQUESTED_FAILED';

export const fetchWorkers = createAction(FETCH_WORKERS);
export const requestWorkersSuccess = createAction(REQUESTED_WORKERS_SUCCEEDED);
export const requestWorkersError = createAction(REQUESTED_WORKERS_FAILED);

// - обновление по одному (тип запроса пусть будет Put по id) (при добавлении не будет запроса на обновление с redux, только на фронте и только на post запрос для добавления вариантов), 
// - будет на фронте пока не нажмут отправить)
// - удаление рабочих по одному (delete и id при каждом удалении запрос)
// - возможность выделить несколько вариантов и удалить сразу нескольких вариантов, пусть будет POST запрос с массивом id в body
// - удаление всего списка рабочих (пусть будет delete с ендпоинтом (workers/all))
// - один статус action для загрузки. который применяется только при загрузке данных, но не изменении, а второй для ошибок универсальный