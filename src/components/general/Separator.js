import { SvgContainer, SvgItem } from './SeparatorStyles';

function Separator({
    backgroundColor,
    fill,
    translateY
}) {
    return (
        <SvgContainer backgroundColor={backgroundColor}>
            <SvgItem data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill={fill} translateY={translateY}>
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
            </SvgItem>
        </SvgContainer>
    );
}




export default Separator;



