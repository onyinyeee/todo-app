import { useForm } from "react-hook-form";
import { Input } from "../input-field";
import "./styles.css";

export const NewTodoForm = () => {

    const {register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {}
            <input
                type="text"
                name="title"
                label="Todo (e.g do laundry)"
                errors={errors}
                register={register}
                validationSchema= {
                    {
                        required: "todo text is required",
                        minLength: {
                            value: 3,
                            message: "please enter at least 3 characters"
                        }
                    }
                    
                }
                required
                />

<input
                type="date"
                name="date"
                label="Due Date"
                errors={errors}
                register={register}
                validationSchema= {
                    {
                        required: "todo deadline is required",
                       
                    }
                    
                }
                required
                />


            <input type="submit" />
        </form>
    )
}