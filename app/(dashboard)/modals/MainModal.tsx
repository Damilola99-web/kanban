"use client"

import { useModal } from "@/hooks/useModals";
import CreateBoard from "./CreateBoard";
import MobileTab from "./MobileTab";

export default function MainModal() {
    const {close, type} = useModal()
	return (
		<div onClick={close} className='z-[100] transition-all duration-200 flex  justify-center w-screen h-screen bg-black/50 overflow-hidden fixed p-4'>
			{type === "createBoard" && <CreateBoard />}
				{type === "mobileTab" && <MobileTab />}
			
		</div>
	);
}
