import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInfoProps {
    email: null | string;
    username: null | string;
    avatar_url: null | string;
    onboarded: boolean;
    about: string;
}

const initialState: UserInfoProps = {
    email: null,
    username: null,
    avatar_url: null,
    onboarded: false,
    about: ""
}

const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUserInfo: (state: UserInfoProps, action: PayloadAction<Partial<UserInfoProps>>) => {
            for (const [key, value] of Object.entries(action.payload)) {
                (state[key as keyof UserInfoProps] as string | boolean | null) = value;
            }
        }
    }
});

export const { setUserInfo } = userSlice.actions;

const userInfoReducer = userSlice.reducer;
export default userInfoReducer;