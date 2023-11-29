import LogoutButton from '@/components/features/LogoutButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { getAuthUser } from '@/lib/auth';

const AccountPage = async () => {
    const user = await getAuthUser().then((res) => res);

    console.log(user);

    if (!user) {
        throw new Error('You should be connected to Continue');
    } else {
        return (
            <Card className='mt-24 h-1/2 w-3/4'>
                <CardHeader>
                    <CardTitle className='mb-4 w-full'>
                        <div className='flex w-full justify-between'>
                            Mon Compte
                            <Avatar>
                                <AvatarFallback>
                                    {user?.name?.[0]}
                                </AvatarFallback>
                                {user?.image && (
                                    <AvatarImage
                                        src={user?.image}
                                        alt='user image'
                                    ></AvatarImage>
                                )}
                            </Avatar>
                        </div>
                    </CardTitle>
                    <CardDescription>
                        <div>name: {user.name}</div>
                        <div>email: {user.email}</div>
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col gap-y-2'>
                    <Button variant='outline'>Nouvelle Recette</Button>
                    <LogoutButton></LogoutButton>
                </CardContent>
            </Card>
        );
    }
};

export default AccountPage;
