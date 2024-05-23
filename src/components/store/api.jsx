import axios from "axios";

const api = axios.create({
   baseURL: "http://ec2-184-73-109-159.compute-1.amazonaws.com:8000/",
   headers: {
      "Content-Type": "application/json",
   },
});
api.interceptors.request.use((config) => {
   const accessToken = localStorage.getItem(token.name);
   const refreshToken = localStorage.getItem(token.refreshToken);
   if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
   }

   if (refreshToken) {
      config.headers[`X-Refresh-Token-${token.name}`] = refreshToken;
   }
   return config;
});






// Function to refresh access token
const refreshAccessToken = async () => {
   try {
     const response = await api.post('/refresh', {
       refresh_token: localStorage.getItem('refreshToken')
     });
     localStorage.setItem('token', response.data.accessToken);
     return response.data.accessToken;
   } catch (error) {
     console.error('Error refreshing token:', error);
     throw new Error('Session expired. Please login again.');
   }
 };
 
 // Request interceptor to handle token expiration
 api.interceptors.response.use(response => response, async (error) => {
   const originalRequest = error.config;
   if (error.response.status === 401 && !originalRequest._retry) {
     originalRequest._retry = true;
     const newAccessToken = await refreshAccessToken();
     originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
     return api(originalRequest);
   }
   return Promise.reject(error);
 });
 
































// api.interceptors.request.use(
//   (config) => {
//     const tokens = [
//       { name: 'accessToken1', refreshToken: 'refreshToken1' },
//       { name: 'accessToken2', refreshToken: 'refreshToken2' },
//       { name: 'accessToken3', refreshToken: 'refreshToken3' },
//       // Add more tokens here as needed
//     ];

//     tokens.forEach((token) => {
//       const accessToken = localStorage.getItem(token.name);
//       const refreshToken = localStorage.getItem(token.refreshToken);

//       if (accessToken) {
//         config.headers.Authorization = `Bearer ${accessToken}`;
//       }

//       if (refreshToken) {
//         config.headers[`X-Refresh-Token-${token.name}`] = refreshToken;
//       }
//     });

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     const tokens = [
//       { name: 'accessToken1', refreshToken: 'refreshToken1' },
//       { name: 'accessToken2', refreshToken: 'refreshToken2' },
//       { name: 'accessToken3', refreshToken: 'refreshToken3' },
//       // Add more tokens here as needed
//     ];

//     if (
//       error.response.status === 401 &&
//       error.response.statusText === 'Unauthorized'
//     ) {
//       for (const token of tokens) {
//         if (
//           originalRequest.url === `https://your-api-url.com/refresh-token-${token.name}`
//         ) {
//           try {
//             const response = await axios.post(
//               `https://your-api-url.com/refresh-token-${token.name}`,
//               {
//                 refreshToken: localStorage.getItem(token.refreshToken),
//               }
//             );

//             localStorage.setItem(token.name, response.data.accessToken);
//             localStorage.setItem(token.refreshToken, response.data.refreshToken);

//             return api(originalRequest);
//           } catch (error) {
//             window.location.href = '/login';
//             return Promise.reject(error);
//           }
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default api;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2OTMwMTExLCJpYXQiOjE3MDU2MzQxMTEsImp0aSI6IjU0OGJmY2U3ZWJkNjRiZjk5ZjljNWY1MjZmNzM1ZTVmIiwidXNlcl9pZCI6MzZ9.8ILAgrI4Pfjijz68DE9rceWmQK41paCH5I_JjZbrJn8"
