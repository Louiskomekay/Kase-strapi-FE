import styled from "styled-components"

const RepPages = ({ image, title, p1, p2, p3 }) => {
    return (
        <Wrapper>
            <div className="PageImageContainer">
                <img src={image} alt="image" className="PageImage" />
            </div>
            <div className="PageContent">
                <h1>{title}</h1>
                <p>
                    {p1}
                    <br />
                    <br />
                    {p2}
                    <br />
                    <br />
                    {p3}
                </p>
            </div>
        </Wrapper>
    )
};

export default RepPages;

const Wrapper = styled.div`
    padding: var(--page-margin);
    margin: 3.5rem auto;
    max-width: 52rem;
    .PageImageContainer {
        display: grid;
        height: 25rem;
        overflow: hidden;
        margin-bottom: 3rem;
    }
    .PageImage {
        place-items: center;
        width: 105%;
        margin: 1rem auto;
        object-fit: contain;
    }
    .PageContent h1{
        font-size: var(--fs-600);
        text-transform: uppercase;
        color: var(--Blue1);
    } 
    .PageContent p{
        margin-top: .5rem;
        font-weight:300;
        font-size: var(--fs-400);
        line-height: 1.8rem;
    }

    /* Tablet */
    @media (max-width:80em) {
        .PageImage {
            width: 160%;
            align-items: center;
            justify-content: center;
        }
    }

    /* Mobile */
    @media (max-width:33.75em) {
        margin: 2.5rem auto;
        .PageImageContainer {
            height: 15rem;
            margin-bottom: 1.5rem;
        }
        .PageImage {
            width: 140%;
        }
        .PageContent p{
            line-height: 1.4rem;
        }
    }
`