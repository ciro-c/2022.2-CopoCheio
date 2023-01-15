import styled from "styled-components";
import Text from "../atoms/Text";
import { colors } from "../../styles/colors";
import Image from "../atoms/Image";
import Icon from "../atoms/Icon/Icon";

interface ModalHeaderInterface {
    title: string;
    userImage?: string;
    userName?: string;
}

const ModalHeaderContainer = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    align-items: center;
    column-gap: 0.5em;
`
const ModalHeader = ({
    title,
    userImage,
    userName
}: ModalHeaderInterface) => (
    <ModalHeaderContainer>
        <Text
            size='24px'
            weight='semibold'
            color={colors.black}>
            {title}
        </Text>
        {userImage ? <Image src={userImage} height={'20px'} width={'20px'} borderRadius={'20px'} marginRight='4px'/> : <Icon size={'20px'} icon={'account_circle'} color={colors.grey} />}
        <Text
            size='10px'
            weight='regular'
            color={colors.grey}>
            {userName}
        </Text>
    </ModalHeaderContainer>
);

export default ModalHeader;