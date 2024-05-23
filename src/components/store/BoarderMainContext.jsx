import React, { Children } from 'react'
import { createContext, useContext } from 'react';
import API from './api';
export const StateStorage = createContext({
    usersEmail:[],
    usersPass:[],
    usersNamef:[],
    usersNamel:[],
})
export function MainBoard({children}){
    const login = async (email, password) => {
        try {
          const response = await API.post('/login', {
            email,
            password,
          });
          localStorage.setItem('authToken', response.data.token); // Store the token
          return response.data;
        } catch (error) {
          console.error('Login error:', error);
          throw error;
        }
      };
    
      const signup = async (userData) => {
        try {
          const response = await API.post('/signup', userData);
          // Handle post-signup logic, maybe auto-login or notify user to login
          return response.data;
        } catch (error) {
          console.error('Signup error:', error);
          throw error;
        }
      };
    const fetchData = async () => {
        try {
          const response = await API.get('/admin');
          return response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
      };
    
      const createData = async (newData) => {
        try {
          const response = await API.post('/your-endpoint', newData);
          return response.data;
        } catch (error) {
          console.error('Error creating data:', error);
          throw error;
        }
      };
    
      const updateData = async (id, updatedData) => {
        try {
          const response = await API.put(`/your-endpoint/${id}`, updatedData);
          return response.data;
        } catch (error) {
          console.error('Error updating data:', error);
          throw error;
        }
      };
    
      const deleteData = async (id) => {
        try {
          const response = await API.delete(`/your-endpoint/${id}`);
          return response.data;
        } catch (error) {
          console.error('Error deleting data:', error);
          throw error;
        }
      };
      return (
        <StateStorage.Provider value={{ fetchData, createData, updateData, deleteData }}>
          {children}
        </StateStorage.Provider>
      );    
}
//  <StateStroage.Provider/>