import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { SiteConfig } from '@/lib/config';
import Link from 'next/link';
import AuthLogin from '../features/auth/AuthLogin';
import { Typography } from '../ui/Typography';

export function Header() {
    return (
        <header className='sticky top-0 z-40 w-full border-b bg-background'>
            <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
                <div className='flex gap-6 md:gap-10'>
                    <Typography
                        variant='h3'
                        as={Link}
                        href='/'
                        className='text-primary'
                    >
                        {SiteConfig.title}
                    </Typography>
                </div>

                <div className='flex flex-1 items-center justify-end space-x-4'>
                    <nav className='flex items-center space-x-1'>
                        <AuthLogin></AuthLogin>
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
