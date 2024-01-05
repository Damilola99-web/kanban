"use client"

import { useModal } from "@/hooks/useModals";
import CreateBoard from "./CreateBoard";

export default function MainModal() {
    const {close, type} = useModal()
	return (
		<div onClick={close} className='z-[100] transition-all duration-200 flex items-center justify-center w-screen h-screen bg-black/50 overflow-hidden fixed p-4'>
			<div onClick={(e) => e.stopPropagation()} className='bg-white max-w-[30rem] w-full p-8 transition-all duration-200 rounded-lg '>
				{type === "createBoard" && <CreateBoard />}
			</div>
		</div>
	);
}
