"use client"
import {PuffLoader} from "react-spinners"
export default function Page() {
    return <div className="w-full h-full min-h-screen flex items-center justify-center">
        <PuffLoader size={60} color="#635fc7"/>
    </div>;
}
