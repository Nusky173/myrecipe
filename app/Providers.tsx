'use client';

import { ToastProvider } from '@/components/ui/toast';
import { Toaster } from '@/components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <>
            <ThemeProvider
                attribute='class'
                defaultTheme='system'
                enableSystem>
                <SessionProvider>
                    <ToastProvider>
                        <Toaster></Toaster>
                        <QueryClientProvider client={queryClient}>
                            {children}
                        </QueryClientProvider>
                    </ToastProvider>
                </SessionProvider>
            </ThemeProvider>
        </>
    );
};
