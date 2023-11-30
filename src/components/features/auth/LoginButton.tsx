'use client';

import { useMutation } from '@tanstack/react-query';
import { LogIn } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Loader from '../../ui/Loader';
import { Button } from '../../ui/button';

const LoginButton = () => {
    const mutation = useMutation({
        mutationFn: async () => signIn(undefined, { callbackUrl: '/' }),
    });

    return (
        <Button
            variant='outline'
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
            Se connecter
        </Button>
    );
};

export default LoginButton;
