import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IProfile {
    aboutMe: string;
    contacts: Record<string, string> | null;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
}



export interface IProfileState {
    profile: IProfile;
}

const initialState: IProfileState = {
    profile: {
        aboutMe: "",
        contacts: {
            vk: 'vk.com/id=221166091'
        },
        lookingForAJob: true,
        lookingForAJobDescription: "ищу работу react разработчиком!",
        fullName: "Кожин Юрий",
    }
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<Partial<IProfile>>) => {
            state.profile = action.payload as IProfile;
        },

    }
})


export const {setProfile} = profileSlice.actions;
export default profileSlice.reducer;