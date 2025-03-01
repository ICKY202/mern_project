import { useEffect } from 'react';
import React from 'react';
import {getCurrentUser} from '../../api/users';

function Home() {
  useEffect(() => {
    const fetchUser = async () => {
      const response = await getCurrentUser();
      console.log(response.role);
    }
    fetchUser();
  }, []);
  return (
    <div>
      Home
    </div>
  )
}

export default Home;
