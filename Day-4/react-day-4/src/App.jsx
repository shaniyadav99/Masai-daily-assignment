import React from 'react';
import PaginatedList from './PaginatedList';
import FormWithFormik from './FormWithFormik';

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>

      <section style={{ marginBottom: '3rem' }}>
        <PaginatedList />
      </section>

      <section>
        <h2>Formik Form</h2>
        <FormWithFormik />
      </section>
    </div>
  );
};

export default App;
