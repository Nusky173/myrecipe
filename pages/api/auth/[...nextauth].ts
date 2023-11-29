import { env } from '@/lib/env';
import { prisma } from '@/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { AuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    theme: {
        logo: '/img/logo-text.png',
    },
    providers: [
        GithubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
        }),
        EmailProvider({
            server: env.EMAIL_SERVER,
            from: env.EMAIL_FROM,
        }),
    ],
    callbacks: {
        session({ session, user }) {
            session.user.id = user.id;
            session.user.image = user.image;
            return session;
        },
    },
};

export default NextAuth(authOptions);
