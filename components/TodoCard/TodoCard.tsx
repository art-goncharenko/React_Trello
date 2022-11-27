import {Card} from "../Card/Card";
import {Label} from "../Label/Label";
import {Date} from "../Date/Date";
import {TaskProgress} from "../TaskProgress/TaskProgress";
import {BsFlag, BsListCheck} from "react-icons/bs";
import {AsignedToTask} from "../AsignedToTask/AsignedToTask";
import {TbDots, TbMessages} from "react-icons/tb";

export const TodoCard = ({name, tags}: any) => {

    return (
        <Card>
            <>
                <div className="flex flex-row justify-between my-1">
                    <div>
                        {tags.map((tag: string) => <Label key={tag} text={tag}/>)}
                    </div>
                    <div className="w-7 flex justify-center items-center">
                        <TbDots size="1.3em"/>
                    </div>

                </div>
                <div className="w-64"><h2>{name}</h2></div>
                <div className="flex flex-row justify-between justify-center items-center my-2">
                    <div className="flex flex-row"><BsFlag/><Date date="Dec 15"/></div>
                    <div className="flex flex-row"><BsListCheck/><TaskProgress tasksDone="2/10"/></div>
                </div>
                <div className="flex flex-row justify-between justify-center items-center mt-8">
                    <div><AsignedToTask asignedTo=""/></div>
                    <div>
                        <div><TbMessages /></div>
                    </div>
                </div>

            </>
        </Card>
    )
}