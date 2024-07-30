import styled from 'styled-components'
import { errorImage3 } from "../images";
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const error = useRouteError()
    console.log(error);

    return (
        <Wrapper>
            <div>
                <img src={errorImage3} alt="image" id="errorImg" />
                <p className="errorMessage">Oops, it looks like something went wrong...</p>
            </div>
        </Wrapper>
    )
}

export default ErrorElement

// STYLING
const Wrapper = styled.main`
    display: grid;
    place-items: center;
    height: 100vh;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div p {
        font-size: 1.1rem;
        text-align: center;
        margin-bottom: 3rem;
    }

    #errorImg {
        width: 16rem;
        height: 16rem;
        margin-bottom: 2rem;
    }

    .errorMessage {
        font-size: 2rem;
    }

    @media (max-width:33.75em) {
        #errorImg {
            width: 8rem;
            height: 8rem;
            margin-bottom: 1rem;
        }
        .errorMessage {
            font-size: var(--fs-400);
        }
    }
`