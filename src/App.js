import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initApp } from 'ducks/app/actions';
import { ContactsTable } from 'containers/ContactsTable';
import { Modal } from 'containers/Modal';

/**
 * Main component displaying contact table and initializing project
 */
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);

  return (
    <>
      <ContactsTable />
      <Modal />
    </>
  );
};
