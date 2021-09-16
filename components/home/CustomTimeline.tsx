import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
   } from 'vertical-timeline-component-react';
   
   
  
   const customTheme = {
    yearColor: '#8EAEFF',
    lineColor: '#8EAEFF',
    dotColor: '#8EAEFF  ',
    borderDotColor: '#8EAEFF',
    titleColor: '#8EAEFF',
    subtitleColor: '#bf9765',
    textColor: '#a0a0a0',
    /*yearColor: '#405b73',
    lineColor: '#d0cdc4',
    dotColor: '#a0a0a0',
    borderDotColor: '#d0cdc4',
    titleColor: '#405b73',
    subtitleColor: '#bf9765',
    textColor: '#a0a0a0',*/
   };

   
const CustomTimeline = () => {
    return (
        <Timeline theme={customTheme} dateFormat='L' lang='en'>
        <Container>
        <YearContent startDate='2020/10' currentYear />
        <BodyContent>
          <Section title='Paigo'>
          <Description variant='subtitle' text='Software developer' />
          <Description text='ReactJs + NextJs + Java + MySQL' />
          <Description text='Agile + remote' />
          </Section>
        </BodyContent>
        </Container>

        <Container>
        <YearContent startDate='2017/09' endDate='2020/10' />
        <BodyContent>
          <Section title='Hospital Británico'>
          <Description variant='subtitle' text='Software developer' />
          <Description text='SQL Server + GeneXus' />
          </Section>
        </BodyContent>
        </Container>

        <Container>
        <YearContent startDate='2015/02' endDate='2016/04' />
        <BodyContent>
          <Section title='Emestudio'>
          <Description variant='subtitle' text='Technician' />
          <Description text='Installation of Company Software & Hardware to clients' />
          </Section>

        
        </BodyContent>
        </Container>
      </Timeline>
    );
}

export default CustomTimeline;