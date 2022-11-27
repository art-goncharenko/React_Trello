import {log} from "util";

const avatarColors = ['bg-green-300', 'bg-yellow-300', 'bg-red-300', 'bg-blue-300'];

export const Avatar = ({initials}:{initials:string}) =>{
    const randomColor = avatarColors[initials.charCodeAt(0) % avatarColors.length];
    const style = `flex justify-center items-center rounded-full w-6 h-6 -ml-2 text-xs border border-white ${randomColor}`;
    return (
        <div className={style}>
            {initials.toUpperCase()}
        </div>
    )
}


