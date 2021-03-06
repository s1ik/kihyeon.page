import styled from 'styled-components';
// Utils
import { rhythm } from '@style/typography';

const ColTitle = styled.div`
  color: ${({ theme }) => theme.project.soundSpot['$denim']};
  font-weight: bold;
  margin-bottom: ${rhythm(1 / 3)};
`;

export default ColTitle;
