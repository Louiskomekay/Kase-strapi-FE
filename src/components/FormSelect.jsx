import { useId } from "react-id-generator";

const FormSelect = ({ name, iterable, defaultValue }) => {
    return (
        <div className="filter">
            <label htmlFor={name} className="filterLabel">{`Select ${name}`}</label>
            <select name={name} id={name} className="selectStyling" defaultValue={defaultValue}>
                {iterable.map((item) => {
                    return <option value={item} key={useId()}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default FormSelect;