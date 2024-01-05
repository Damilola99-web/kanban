import { SignIn } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className='w-full h-full min-h-screen flex items-center justify-center p-3'>
			<SignIn />
		</div>
	);
}
