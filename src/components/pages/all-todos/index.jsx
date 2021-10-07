import { Todo } from "../../todo/index"
import "./styles.css"

export const AllTodosPage = () => {
    return (
        <div>
            <Todo
            text="walk my dog" date="10/10/2021" color="blue"></Todo>

            <Todo text="buy detergent" date="10/10/2021" color="blue"></Todo>

            <Todo text="go home" date="10/10/2021" color="blue"></Todo>
        </div>
    )

}