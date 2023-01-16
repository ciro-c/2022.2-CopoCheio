import styled from "styled-components";
import ModalText from "./ModalText";
import ModalHeader from "./ModalHeader";
import { colors } from "../../styles/colors";
import Image from "../atoms/Image";
import IconText from "../atoms/IconText";

interface ModalBodyInterface {
    type: 'confirm' | 'create';
    title?: string;
    userName?: string;
    userImage?: string;
    ingredients?: string;
    guide?: string;
    image?: string;
    time?: number;
    dificulty?: string;
    base?: string;
    country?: string;
}

const BodyContainer = styled.div`
    display: flex;
    padding: 10px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    flex-direction: column;
    flex-wrap: wrap;
`;

const TextSide = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  padding: 1%;
  overflow: hidden;
  flex-direction: column;
`;

const CardSide = styled.div`
  height: 100%;
  width: 40%;
  padding: 1%;
  overflow: hidden;
`;

const BlankImage = styled.div`
  display: flex;
  height: 45%;
  background-color: ${colors.grey};
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const IconRow = styled.div`
    display: flex;
    height: fit-content;
    width: 100%;
    margin-top: 3%;
`;

const LeftIcon = styled.div`
    height: fit-content;
    width: 30%;
`;
const RightIcon = styled.div`
    height: fit-content;
    width: 70%;
`;

const ModalBody = ({
    type,
    title,
    userName,
    userImage,
    ingredients,
    guide,
    image,
    time,
    dificulty,
    base,
    country
}: ModalBodyInterface) => {
    switch (type) {
        case 'confirm':
            return (
                <BodyContainer>
                    <TextSide>
                        <ModalHeader title={title} userName={userName} userImage={userImage} />
                        <ModalText title='Ingredientes' text={ingredients} />
                        <ModalText title='Modo de preparo' text={guide} />
                    </TextSide>
                    <CardSide>
                        {image ? <Image src={userImage} height={'40%'} width={'100%'} borderRadius={'8px'} marginRight='4px' /> : <BlankImage>No image</BlankImage>}
                        <IconRow>
                            <LeftIcon>
                                <IconText iconColor={colors.primary} iconLeft='schedule' iconSize='18px' fontColor={colors.grey} fontSize='16px' children={`${time} min`} />
                            </LeftIcon>
                            <RightIcon>
                                <IconText iconColor={colors.primary} iconLeft='sports_bar' iconSize='18px' fontColor={colors.grey} fontSize='16px' children={base} />
                            </RightIcon>
                        </IconRow>
                        <IconRow>
                            <LeftIcon>
                                <IconText iconColor={colors.primary} iconLeft='school' iconSize='18px' fontColor={colors.grey} fontSize='16px' children={dificulty} />
                            </LeftIcon>
                            <RightIcon>
                                <IconText iconColor={colors.primary} iconLeft='flag' iconSize='18px' fontColor={colors.grey} fontSize='16px' children={country} />
                            </RightIcon>
                        </IconRow>
                    </CardSide>
                </BodyContainer>
            );
        case 'create':
            return (
                <BodyContainer>

                </BodyContainer>
            )
    }
}

export default ModalBody;