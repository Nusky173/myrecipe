import { clsx, type ClassValue } from 'clsx';
import { Theme } from 'next-auth';
import { EmailConfig } from 'next-auth/providers';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export interface SendVerificationRequestParams {
    identifier: string;
    url: string;
    expires: Date;
    provider: EmailConfig;
    token: string;
    theme: Theme;
}

export const sendVerificationRequest = (
    params: SendVerificationRequestParams,
) => {};

export const Category: { [key: string]: string } = {
    STARTER: 'Entrée',
    MAIN_DISH: 'Plat',
    DESERT: 'Dessert',
    SALAD: 'Salad',
    SAUCE: 'Sauce',
    SOUP: 'Soupe',
    COCKTAIL: 'Cocktail',
    DRINK: 'Boisson',
    OTHER: 'Autre',
};
