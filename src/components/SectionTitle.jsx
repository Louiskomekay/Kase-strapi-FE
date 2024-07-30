import styled from "styled-components"

const SectionTitle = ({ text }) => {
    return (
        <Wrapper>
            <h2 className="sectionTitle">{text}</h2>
        </Wrapper>
    )
}

export default SectionTitle

const Wrapper = styled.div`
    .sectionTitle {
        text-transform: capitalize;
        color: var(--Blue1);
    }
    @media (max-width:33.75em) {
        .sectionTitle {
            font-size: 1.1rem;
        }
    }
`