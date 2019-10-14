import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadDataAction } from '../actions';
import DataTable from './DataTable';

const TeamsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDataAction('teams'));
    dispatch(loadDataAction('conferences'));
  }, []);

  return (
    <DataTable entity="teams" />
  )
}

export default TeamsPage;