import './App.css'
import type { RootState } from './store/store'
import { useSelector, useDispatch } from 'react-redux'
import { signout } from './store/slice/user.slice';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  // useSelector - פונקציה שמאפשרת לשלוף מידע מהסטור הכללי
  // מקבלת פונקציית חץ, שמקבלת כפרמטר את הסטייט, וניתן להחזיר מנה את המשתנה המבוקש
  const user = useSelector((state: RootState) => state.user.user);
  // נשתמש בפונקציה dispatch
  // כדי להתריע על שינוי שקרה
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    if(!user.firstName) {
      // האפשרות לנווט דרך הקוד לעמוד אחר
      navigate('/signin')
    };
  }, [user])

  const signOut = () => {
    // להרים ארוע - להודיע שקרה שינוי כלשהו שאמור להשפיע על הנתונים
    dispatch(signout())
  }

  return (
    <>
      <ul>
        <li>
          <Link to="/about">About</Link>

        </li>
        <li>
          <Link to="/counter">Counter</Link>

        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button onClick={() => signOut()}>Sign out</button>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
