import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgb(255, 255, 255)'
      : 'rgb(255, 255, 255)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function CustomizedAccordions() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
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