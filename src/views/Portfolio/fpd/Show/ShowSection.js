import Separator from "../../../../components/general/Separator";

import {
    ShowContainer,
    ShowTitle,
    ShowImage,
    ShowContent,
    ShowVideoContent,
    ShowContentDescription
} from "./ShowSection.styles";
import Parallax from '../../../../components/general/ParrallaxImages';

const ShowSection = () => {

    return (
        <>
            <Separator fill="#efefef" backgroundColor="#010101" translateY="-1px" />
            <ShowContainer>
                <ShowTitle>Shows</ShowTitle>
                    <ShowVideoContent>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/thumb_0.jpg'}`}/>
                    </ShowVideoContent>
                <ShowContent>
                        <ShowImage src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/thumb_1.jpg'}`} />
                        <ShowImage src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/thumb_2.jpg'}`} />
                        <ShowImage src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/thumb_3.jpg'}`} />
                        <ShowImage src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/thumb_4.jpg'}`} />
                </ShowContent>
            </ShowContainer>
        </>
    )
}

export default ShowSection;