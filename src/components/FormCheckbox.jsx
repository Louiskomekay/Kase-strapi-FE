
const FormCheckbox = ({ label, name, defaultValue }) => {
    return (
        <div>
            <label htmlFor={name} className="filterLabel">
                <span>{label}</span>
            </label>
            <input type="checkbox" name={name} defaultChecked={defaultValue} className="checkbox" />
        </div>
    )
}

export default FormCheckbox;
