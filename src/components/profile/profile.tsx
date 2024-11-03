import styles from './profile.module.css';
import {IProfile} from "../../store/slice/profileSlice.ts";

interface IProps  {
    profile: IProfile;
}

export const Profile: React.FC<IProps> = ({profile}: IProps) => {
    const {
        aboutMe,
        contacts,
        lookingForAJobDescription,
        lookingForAJob,
        fullName
    } = profile;

    return (<div className={styles.profile}>
        <img src="#" alt="profile-photo"/>
        <p>
            {fullName}
        </p>
        <p>
            o cебе: {aboutMe}

        </p>
        <p>
            Ищу работу: {lookingForAJob?"Да": 'Нет'}
        </p>
        <p>
            {lookingForAJobDescription}
        </p>

    </div>);
}