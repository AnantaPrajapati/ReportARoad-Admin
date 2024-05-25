// export { default } from "next-auth/middleware";

// export const config = {matcher: ['/dashboard'] };





// // import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// const Middleware = ({ children }) => {
// //   const router = useRouter();
//   const role = window.localStorage.getItem('role');
//   const isAdmin = role === 'Admin';
//   const isGovernment = role === 'Government';

//   useEffect(() => {
//     if (!isAdmin && !isGovernment) {
//       router.push('/unauthorized'); 
//     }
//   }, [isAdmin, isGovernment]);

//   return <>{children}</>;
// };

// export default Middleware;
