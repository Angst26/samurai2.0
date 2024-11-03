import {Profile} from "./profile.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";

export const ProfileContainer: React.FC = () => {
    const profile = useSelector((state: RootState) => state.profilePage.profile);


    return (
        <Profile profile={profile} />
    )
}

