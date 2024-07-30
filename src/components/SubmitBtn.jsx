import { useNavigation } from "react-router-dom"
import styled from "styled-components"

const Submit = ({ text, className }) => {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

    return (
        <button type='submit' className={className} disabled={isSubmitting}>
            {isSubmitting ? 'submitting' : text}
        </button>
    )
}


export default Submit;

const Wrapper = styled.div``