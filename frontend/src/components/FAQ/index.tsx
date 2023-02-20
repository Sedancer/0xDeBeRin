import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { t } = useTranslation();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const answerQuestions = [
    ['question1', 'answer1'],
    ['question2', 'answer2'],
    ['question3', 'answer3'],
  ];

  const TitleFilter = styled('div')(
    () => `
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 8px;
  `
);
const ContainerWrapper = styled('div')(
  () => `
  margin: 8px;
`
);
const Question = styled('h2')(
  () => `
  font-size: 16px;
`
);

  return (
    <ContainerWrapper>
      <TitleFilter>
      {t('faqs')}
      </TitleFilter>
       
      {answerQuestions.map((item, index) => {
        const panel = `panel${index}`;
        return (
          <Accordion key={panel} expanded={expanded === panel} onChange={handleChange(panel)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${panel}bh-content`}
              id={`${panel}bh-header`}
            >
              <Question>
                {t(item[0])}
              </Question>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {t(item[1])}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </ContainerWrapper>
  );
}