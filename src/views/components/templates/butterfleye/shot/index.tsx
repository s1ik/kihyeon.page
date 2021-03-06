import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
// Components
import AnimationRowImg from '@molecule/AnimationRowImg';
import ImageWrap from '@atom/wrap/Image';

const AnimationRowImg2Wrap = styled.div`
  img {
    width: auto;
    max-height: 360px;
  }
`;

const Shot = () => {
  const singleImg = [
    `${process.env.FILE_SERVER}/bu-eye-001.jpg`,
    `${process.env.FILE_SERVER}/bu-eye-002.jpg`,
    `${process.env.FILE_SERVER}/butterfleye1.jpg`,
    `${process.env.FILE_SERVER}/bu-eye-003-scaled-1.jpg`,
    `${process.env.FILE_SERVER}/2-scaled-1.jpg`,
  ];
  const aniSingleImg = [
    `${process.env.FILE_SERVER}/3-3.jpg`,
    `${process.env.FILE_SERVER}/butterfleye4realreal.jpg`,
    `${process.env.FILE_SERVER}/butterfleye6.jpg`,
  ];
  const singleRowImag = [
    `${process.env.FILE_SERVER}/butterfleye.png`,
    `${process.env.FILE_SERVER}/butterfly.jpg`,
  ];
  return (
    <>
      {singleRowImag.map(img => (
        <ImageWrap bgColor="transparent" style={{ marginBottom: '4rem' }}>
          <Container>
            <Row>
              <Col col>
                <div>
                  <img src={img} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </ImageWrap>
      ))}
      {aniSingleImg.map(img => (
        <AnimationRowImg bgColor="transparent" imgSrc={img} />
      ))}
      {singleImg.map(img => (
        <ImageWrap bgColor="transparent" style={{ marginBottom: '4rem' }}>
          <Container>
            <Row>
              <Col col>
                <div>
                  <img src={img} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </ImageWrap>
      ))}
    </>
  );
};

export default Shot;
