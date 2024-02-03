import React from "react";
import styled from "styled-components";
import MainSideNavCp from "./MainSideNavCp";
import PostCommentCp from "./PostCommentCp";

const MoreDiary = () => {
  return (
    <Container>
      <MainSideNavCp />
      <MainContentContainer>
        <MoreUserContentContainer>
          <MoreContentProfileContainer>
            <ProfileWrapper>
              <MoreContentProfileImgWrapper>
                <MoreContentProfileImg
                  src={
                    "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
                  }
                />
              </MoreContentProfileImgWrapper>
              <NameAndTypeWrapper>
                <MoreContentProfileName>Peter_099</MoreContentProfileName>
                <MoreType>Diary</MoreType>
              </NameAndTypeWrapper>
            </ProfileWrapper>
            <DiaryDate>2022-09-12</DiaryDate>
          </MoreContentProfileContainer>
          <DiaryTitleWrapper>
            <DiaryTitleText>TITLE :</DiaryTitleText>
            리버풀 4대0 대승으로 승점 3점 확보! 리버풀 4대0 대승으로 승점 3점
            확보!wdwdwdw 확보!wdwdwdw
          </DiaryTitleWrapper>
          <MoreContentImgWrapper>
            <MoreContentImg
              src={
                "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
              }
            />
          </MoreContentImgWrapper>
          <MoreContentTextContainer>
            <MoreContentText>
              어느날의 퇴근길 풍경입니다:) 며칠 전에 같이 퇴근을 하는데, 앞에
              타고 계시는 부장님과 동호PD가 사이가 너~무 좋은게
              아니겠어요??!!!❤️ 엄마미소를 지으며 보다가 부랴부랴 사진으로 남겨
              놓았는데 사진으로는 즐거웠던 분위기가 전달이 안되는거 같네요;;
              허허허허 그렇지만!!!! 퇴근길 공유 해 봅니다. 월요일 오후시간, 퇴근
              생각이 간절하실 우리 사원님들!!!! 이번한주도 함께
              화이팅해요!!!!!!!!!!☺️✨
            </MoreContentText>
          </MoreContentTextContainer>
          <ContactContainer>
            <ContactsWrapper>
              <Contact></Contact>
              <Contact></Contact>
              <Contact></Contact>
              <Contact></Contact>
            </ContactsWrapper>
          </ContactContainer>
        </MoreUserContentContainer>
      </MainContentContainer>
      <MoreContentCommentsContainer>
        <MoreCommentBackground>
          <MoreCommentsContainer>
            <MoreCommentCountWrapper>
              <MoreCommentCountTitle>댓글</MoreCommentCountTitle>
              <MoreCommentCountNumber>7</MoreCommentCountNumber>
            </MoreCommentCountWrapper>
            <MoreCommentInputWrapper>
              <MoreCommentInput />
              <MoreCommentInputButton>게시</MoreCommentInputButton>
            </MoreCommentInputWrapper>
            <MoreCommentsWrapper>
              <MoreCommentContainer>
                <PostCommentCp />
              </MoreCommentContainer>
              <MoreCommentContainer>
                <PostCommentCp />
              </MoreCommentContainer>
              <MoreCommentContainer>
                <PostCommentCp />
              </MoreCommentContainer>
              <MoreCommentContainer>
                <PostCommentCp />
              </MoreCommentContainer>
              <MoreCommentContainer></MoreCommentContainer>
              <MoreCommentContainer></MoreCommentContainer>
              <MoreCommentContainer></MoreCommentContainer>
            </MoreCommentsWrapper>
          </MoreCommentsContainer>
        </MoreCommentBackground>
      </MoreContentCommentsContainer>
    </Container>
  );
};

export default MoreDiary;

const Container = styled.div`
  width: 100wh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding-left: 270px;
  @media screen and (max-width: 1200px) {
    padding-left: 100px;
  }

  @media screen and (max-width: 901px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 705px) {
    padding-left: 0;
  }
`;

const MainContentContainer = styled.div`
  width: 700px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const MoreUserContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 734px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const MoreContentProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 560px;
  margin-bottom: 70px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const MoreContentProfileImgWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

const MoreContentProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  object-fit: cover;
`;

const NameAndTypeWrapper = styled.div`
  padding-top: 5px;
`;

const MoreType = styled.div`
  font-size: 14px;
  color: gray;
  padding-left: 10px;
  margin-top: 5px;
`;

const MoreContentProfileName = styled.span`
  font-weigt: 700;
  margin-left: 10px;
  height: 20px;
  margin-top: 10px;
  margin-right: 50%;
`;

const ProfileWrapper = styled.div`
  display: flex;
`;

const DiaryDate = styled.div`
  font-size: 20px;
  color: #808080;
  line-height: 50px;
`;

const DiaryTitleWrapper = styled.div`
  padding: 5px 10px 8px 10px;
  width: 560px;
  font-size: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const DiaryTitleText = styled.span`
  color: gray;
  font-size: 20px;
  margin-right: 10px;
`;
const DiaryTitleContent = styled.div`
  font-size: 20px;
`;
const MoreContentImgWrapper = styled.div`
  width: 560px;
  height: 500px;
  margin-bottom: 70px;
  object-fit: cover;
  border-bottom: 1px solid #d7d7d7;
  border-top: 1px solid #d7d7d7;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;

    padding-bottom: 89%;
    position: relative;
  }
`;

const MoreContentImg = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background-color: black;
  margin-bottom: 70px;
  object-fit: cover;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 0;
    margin-top: 20px;
  }
`;

const MoreContentTextContainer = styled.div`
  width: 560px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const MoreContentText = styled.div`
  line-height: 150%;
  color: #767676;
`;

const ContactContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const ContactsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 560px;
`;

const Contact = styled.div`
  width: 80px;
  height: 35px;
  background-color: skyBlue;
  @media screen and (max-width: 470px) {
    width: 60px;
    height: 30px;
  }
`;

//-------------------------MoreComments-----------------------------

const MoreContentCommentsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const MoreCommentBackground = styled.div`
  width: 100%;
  height: auto;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
`;

const MoreCommentsContainer = styled.div`
  width: 560px;
  height: 100%;
  @media screen and (max-width: 600px) {
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
  }
`;

const MoreCommentCountTitle = styled.div`
  font-weight: 600;
`;

const MoreCommentCountWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const MoreCommentCountNumber = styled.div`
  font-weight: 600;
`;
const MoreCommentInputWrapper = styled.div`
  display: flex;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;
const MoreCommentInput = styled.input`
  width: 90%;
  outline: none;
  border: none;
  background-color: #e8e8e8;
  padding-left: 10px;
  border-radius: 8px 0px 0px 8px;
`;

const MoreCommentInputButton = styled.button`
  width: 50px;
  border: none;
  border-radius: 0px 8px 8px 0px;
  background-color: #e8e8e8;
  color: #4199ff;
  font-weight: 600;
`;

const MoreCommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 560px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const MoreCommentContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
`;

//-------------------------MoreComments-----------------------------
