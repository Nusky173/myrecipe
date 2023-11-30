'use client';

import { LogOut, User } from 'lucide-react';
import { Session } from 'next-auth';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '../../ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Button } from '../../ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import RouterButton from '../route/RouterButton';
import LogoutButton from './LogoutButton';

export type LoggedinButtonProps = {
    user: Session['user'];
};

const LoggedInButton = (props: LoggedinButtonProps) => {
    return (
        <DropdownMenu>
            <AlertDialog>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant='outline'
                        size='sm'
                    >
                        <Avatar className='mr-2 h-4 w-4'>
                            <AvatarFallback>
                                {props.user?.name?.[0]}
                            </AvatarFallback>
                            {props.user.image && (
                                <AvatarImage
                                    src={props.user.image}
                                    alt='user image'
                                ></AvatarImage>
                            )}
                        </Avatar>
                        {props.user.name}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <RouterButton
                            url='/account'
                            variant='outline'
                            size='sm'
                            className='w-full'
                        >
                            <User
                                className='mr-2'
                                size={12}
                            />
                            Mon compte
                        </RouterButton>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator></DropdownMenuSeparator>
                    <AlertDialogTrigger asChild>
                        <DropdownMenuItem>
                            <Button
                                variant='outline'
                                size='sm'
                                className='flex w-full flex-1 items-center'
                            >
                                <LogOut
                                    size={12}
                                    className='mr-2 '
                                ></LogOut>
                                Se déconnecter
                            </Button>
                        </DropdownMenuItem>
                    </AlertDialogTrigger>
                </DropdownMenuContent>
                <AlertDialogContent className='w-auto max-w-md'>
                    <AlertDialogHeader>
                        <AlertDialogTitle className='text-center'>
                            Voulez-vous vraiment vous déconnecter ?
                        </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <LogoutButton className='text-sm'></LogoutButton>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </DropdownMenu>
    );
};

export default LoggedInButton;
