import {Dispatch} from 'redux';
import {createAction} from 'redux-actions';
import {IFilter} from '../reducers';

const setFilterAction = createAction<IFilter, IFilter>(
    'SET_FILTER',
    (filters: IFilter) => filters
);

export const setFilter = (filters: IFilter) =>
    (dispatch: Dispatch<IFilter>) => dispatch(
        setFilterAction(filters)
    );
