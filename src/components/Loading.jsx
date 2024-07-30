import { Audio } from "react-loader-spinner"
import styled from "styled-components"

const Loading = () => {
    return (
        <Wrapper className="loaderContainer">
            <Audio height="80"
                width="80"
                radius="9"
                color="#2563EB"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </Wrapper>
    )
}

export default Loading;

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
`