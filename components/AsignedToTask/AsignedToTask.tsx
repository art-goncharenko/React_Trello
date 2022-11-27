import {Avatar} from "../Avatar/Avatar";

export const AsignedToTask = ({asignedTo}:{asignedTo:string}) => {
    return (
        <div className="flex flex-row justify-start ml-1">
            <Avatar initials="Al"/>
            <Avatar initials="Lo"/>
            <Avatar initials="Va"/>
        </div>
    )
}