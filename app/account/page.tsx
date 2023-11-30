import LogoutButton from '@/components/features/auth/LogoutButton';
import RouterButton from '@/components/features/route/RouterButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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

    if (!user) {
        throw new Error('You should be connected to Continue');
    } else {
        return (
            <Card className='mt-24 h-1/2 w-3/4'>
                <CardHeader>
                    <CardTitle className='mb-4 w-full'>
                        <div className='item-center flex w-full justify-between text-xl'>
                            Mon Compte
                            <Avatar className='-mt-2'>
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
                        <div className='text-base'>{user.name}</div>
                        <div className='text-base'>{user.email}</div>
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col gap-y-2'>
                    <RouterButton
                        variant='outline'
                        url='/recipes'
                        className='w-full'
                    >
                        Mes Recettes
                    </RouterButton>
                    <LogoutButton></LogoutButton>
                </CardContent>
            </Card>
        );
    }
};

export default AccountPage;
