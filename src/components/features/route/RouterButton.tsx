import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { Button, ButtonProps } from '../../ui/button';

interface RoutterButtonProps extends ButtonProps {
    url: string;
}

const RouterButton = (props: PropsWithChildren<RoutterButtonProps>) => (
    <Button
        variant={props?.variant}
        size={props?.size}
        className={props?.className}
    >
        <Link
            href={props.url}
            className='flex w-full flex-1 items-center justify-center'
        >
            {props.children}
        </Link>
    </Button>
);

export default RouterButton;
