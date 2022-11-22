import {Card} from "../Card/Card";
import {Label} from "../Label/Label";
import {Date} from "../Date/Date";
import {TaskProgress} from "../TaskProgress/TaskProgress";
import {BsListCheck} from "react-icons/bs";

export const TodoCard = ({name, tags}: any) => {
    return (
        <Card>
            <>
                <div className="flex flex-row justify-between my-1">
                    <div>
                        {tags.map((tag: string) => <Label  key={tag} text={tag}/>)}
                    </div>
                    <div className="w-7">
                        ...
                    </div>

                </div>
                <div className="w-64"><h2>{name}</h2></div>
                <div className="flex flex-row justify-between">
                    <div><Date date="December 15"/></div>
                    <div className="flex flex-row"><BsListCheck/><TaskProgress tasksDone="2/10"/></div>
                </div>

            </>
        </Card>
    )
}