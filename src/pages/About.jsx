import styled from "styled-components"
import AboutUsImage from '../images/About_Us_Image.webp'

const About = () => {
    return (
        <div>
            <Wrapper>
                <div className="PageImageContainer">
                    <img src={AboutUsImage} alt="image" className="PageImage" />
                </div>
                <div className="PageContent">
                    <h1>About us</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quae fugit quaerat cumque debitis modi, deleniti voluptatem illo aliquam vitae minima impedit neque delectus id doloribus ab accusantium inventore fugiat provident excepturi hic mollitia quos dicta!
                        <br />
                        <br />
                        Similique blanditiis consequatur quidemveritatis dolorem! Dolore natus asperioresfacere atque? Consequatur, laborumperferendis iste error vel maxime illocorporis repudiandae consectetur illumeveniet, aspernatur itaque dolor magni ullamsit numquam excepturi eum repellat pariaturanimi distinctio.
                        <br />
                        <br />
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                    </p>
                </div>
            </Wrapper>
        </div>
    )
}

export default About;

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