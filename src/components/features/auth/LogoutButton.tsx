'use client';

import { useMutation } from '@tanstack/react-query';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import Loader from '../../ui/Loader';
import { Button, ButtonProps } from '../../ui/button';

interface LogoutButtonProps extends ButtonProps {}

const LogoutButton = (props: PropsWithChildren<LogoutButtonProps>) => {
    const mutation = useMutation({
        mutationFn: async () => signOut({ callbackUrl: '/' }),
    });

    return (
        <Button
            variant='destructive'
            size='lg'
            onClick={() => mutation.mutate()}
            disabled={mutation.isPending}
            className='flex items-center'
        >
            {mutation.isPending ? (
                <Loader
                    size={20}
                    className='mr-2'
                ></Loader>
            ) : (
                <LogOut
                    className='mr-2'
                    size={20}
                />
            )}
            <div
                className={`text-center tracking-wide text-white ${props.className}`}
            >
                Se déconnecter
            </div>
        </Button>
    );
};

export default LogoutButton;
