import type { Metadata } from 'next';
import {  Plus_Jakarta_Sans } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Kaban Task Management',
	description: 'A Simple Kaban Project Management Website',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang='en' className=''>
				<body className={cn("overflow-hidden w-screen h-screen",inter.className)}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
