import { CHECK_EXISTING_USER_ROUTE, SAVE_NEW_USER_INFO_ROUTE } from "@/constants/routes";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserInfoDataProps {
    email?: null | string;
    username?: null | string;
    avatar_url?: null | string;
    onboarded?: boolean;
    about?: string;
}


export interface UserInfoProps {
    data: null | UserInfoDataProps;
    error: null | string;
}


const initialState: UserInfoProps = {
    data: null,
    error: null
}


export const fetchUserData = createAsyncThunk(
    "userInfo/fetchUserData",
    async (token: string, { rejectWithValue }) => {
        try {
            const response = await axios.post(CHECK_EXISTING_USER_ROUTE, { token });
            const { user } = response.data.data;
            return user;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error);
        }
    }
)


export const saveNewUserInfo = createAsyncThunk(
    "userInfo/saveUserInfoInDB",
    async (data: UserInfoDataProps, { rejectWithValue }) => {
        try {
            await axios.post(SAVE_NEW_USER_INFO_ROUTE, data);
            return true;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error);
        }
    }
)

const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUserInfoData: (state: UserInfoProps, action: PayloadAction<Partial<UserInfoDataProps>>) => {
            const userdata = action.payload;

            if (state.data === null) {
                state.data = userdata;
            } else {
                state.data = {
                    ...state.data,
                    ...userdata
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.data = action.payload;

            if (state.data !== null) {
                state.data.onboarded = true;
            }
        });

        builder.addCase(saveNewUserInfo.fulfilled, (state) => {
            state.data = {
                ...state.data,
                onboarded: true
            }
        });
    }
});

export const { setUserInfoData } = userSlice.actions;

const userInfoReducer = userSlice.reducer;
export default userInfoReducer;