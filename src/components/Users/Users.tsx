import React from 'react';
import styles from './users.module.css';
import {UsersPropsType} from "./UsersContainer";


const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoURL: 'https://comp-pro.ru/wp-content/uploads/b/7/0/b702c0cdba04fbaca0a1226ecf052fac.jpeg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoURL: 'https://comp-pro.ru/wp-content/uploads/b/7/0/b702c0cdba04fbaca0a1226ecf052fac.jpeg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'boss',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoURL: 'https://comp-pro.ru/wp-content/uploads/b/7/0/b702c0cdba04fbaca0a1226ecf052fac.jpeg',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'boss',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }

    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoURL} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;