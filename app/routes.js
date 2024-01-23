import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import AddContact from './components/AddContacts';
import ContactsDetails from './pages/ContactsDetails';
import ContactView from './components/ContactView';

const AppRoutes = () => (
  <Routes>
    <Route path="/contacts/add" element={<AddContact />} />
    <Route path="/contacts/:id" element={<ContactsDetails />} />
    <Route path="/contacts/view/:id" element={<ContactView />} />
    <Route path="/home" element={<Home />} />
  </Routes>
);

export default AppRoutes;