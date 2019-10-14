import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadDataAction } from '../actions';
import DataTable from './DataTable';

const ConferencesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDataAction('conferences'));
  }, []);

  return (
    <DataTable entity="conferences" />
  )
}

export default ConferencesPage;