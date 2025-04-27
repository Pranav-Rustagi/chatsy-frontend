import { CHECK_EXISTING_GOOGLE_USER_ROUTE } from "@/constants/routes";
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

export const fetchGoogleUserData = createAsyncThunk(
    "userInfo/fetchGoogleUserData",
    async (token: string, { rejectWithValue }) => {
        try {
            const response = await axios.post(CHECK_EXISTING_GOOGLE_USER_ROUTE, { token });
            const { user } = response.data.data;
            return user;

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
        builder.addCase(fetchGoogleUserData.fulfilled, (state, action) => {
            if (action.payload !== null && action.payload.user !== null) {
                state = {
                    ...action.payload.user
                }
            } else {
                state.data = null;
            }
        })
    }
});

export const { setUserInfoData } = userSlice.actions;

const userInfoReducer = userSlice.reducer;
export default userInfoReducer;