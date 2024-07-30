import styled from "styled-components"

const FormInput = ({ label, name, type, defaultValue, id, placeholder }) => {
    return (
        <Wrapper>
            <div className='form-control'>
                {/* Form Label */}
                <label className="label">
                    <span>{label}</span>
                </label>
                {/* Form Input */}
                <input
                    type={type}
                    name={name}
                    className='formInput stroke'
                    defaultValue={defaultValue}
                    id={id}
                    placeholder={placeholder}
                />
            </div>
        </Wrapper>
    )
}

export default FormInput

const Wrapper = styled.section`
    .form-control {
        margin-bottom: 1rem;
    }
    .label {
        display: block;
        text-transform: capitalize;
        margin-bottom: .3rem;
    }
    .formInput {
        padding: 1.3rem;
        width: 33rem;
        background: none;
        border-radius: var(--border-radius);
    }

    /* Mobile */
    @media(max-width:33.75em){
        .formInput {
            width: 23rem;
        }
    }
`