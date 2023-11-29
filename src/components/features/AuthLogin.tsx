import { getAuthSession } from '@/lib/auth';
import LoggedInButton from './LoggedInButton';
import LoginButton from './LoginButton';

const AuthLogin = async () => {
    const session = await getAuthSession();

    if (!session?.user) {
        return <LoginButton></LoginButton>;
    } else {
        return <LoggedInButton user={session.user}></LoggedInButton>;
    }
};

export default AuthLogin;
