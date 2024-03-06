
import type { RootState } from './store/store'
import { useSelector, useDispatch } from 'react-redux'
// type UserProps = { user: User }

// export const UserDetails = (props: UserProps) => {

//     const { user } = props;
//     return (
//     <div>
//         <h2>User Details</h2>
//         <div>
//             <label>first name:</label> <span> {user.firstName} </span>
//         </div>
//         <div>
//             <label>last name:</label> <span> {user.lastName} </span>
//         </div>
//     </div>
//     );
// }

// type UserProps = { user: User }

export const UserDetails = () => {
    const user = useSelector((state: RootState) => state.user.user)
    return (
    <div>
        <h2>User Details</h2>
        <div>
            <label>first name:</label> <span> {user.firstName} </span>
        </div>
        <div>
            <label>last name:</label> <span> {user.lastName} </span>
        </div>
    </div>
    );
}
