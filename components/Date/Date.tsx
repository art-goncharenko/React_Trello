
export const Date = ({date}:{date: string}) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="text-xs text-stone-400 my-1">{date}</div>
        </div>
    )
}