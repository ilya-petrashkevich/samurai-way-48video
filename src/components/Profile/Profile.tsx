import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, newPostTextType, PostsType, StoreType} from "../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (/*props: ProfilePropsType*/) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;