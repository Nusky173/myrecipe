'use client';

import { useMutation } from '@tanstack/react-query';
import { LogIn } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Loader from '../ui/Loader';
import { Button } from '../ui/button';

const LogoutButton = () => {
    const mutation = useMutation({
        mutationFn: async () => signOut({ callbackUrl: '/' }),
    });

    return (
        <Button
            variant='destructive'
            size='sm'
            onClick={() => mutation.mutate()}
            disabled={mutation.isPending}
        >
            {mutation.isPending ? (
                <Loader
                    size={12}
                    className='mr-2'
                ></Loader>
            ) : (
                <LogIn
                    className='mr-2'
                    size={12}
                />
            )}
            Se déconnecter
        </Button>
    );
};

export default LogoutButton;
