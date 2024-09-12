import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import WhatsApp from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';


type LinkData = {
  title: string;
  url: string;
};

const sections = [
  { title: 'Concordia Website', url: 'https://www.concordiacollege.edu/' },
  { title: 'Scholarships', url: 'https://www.iefa.org/scholarships/US/' },
  { title: 'News', url: 'https://www.usnews.com/topics/subjects/international_students' },
  { title: 'Immigration', url: 'https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment' },
  { title: 'Taxes', url: 'https://blog.sprintax.com/f1-visa-tax-return-guide-international-students/' },
  { title: 'Minnesota ID', url: 'https://dps.mn.gov/divisions/dvs/real-id/Pages/required-documents.aspx' },
  { title: 'International Community', url: 'https://www.concordiacollege.edu/directories/offices-departments-directory/international-community/' },
  { title: 'ISO Instagram', url: 'https://www.instagram.com/cord_iso/' },
];

const mainFeaturedPost = {
  title: '-- Explore Scholarships --',
  description:
    "Discover a wide range of scholarship opportunities and resources to help fund your education.",
  image: 'resources/scholarships.png',
  imageText: 'Scholarship Opportunities',
  linkText: [['Scholarship Database →', "https://www.fastweb.com/"], 
             ['Scholarship Options at Concordia →', "https://www.concordiacollege.edu/tuition-aid/scholarships/"], 
             ['Scholarships for International Students →', "https://www.iefa.org/scholarships/US/"]
            ],
};

const featuredPosts = [
  {
    title: 'Working in the US',
    date: 'Aug 10',
    description: 'Guidance on finding employment and understanding work regulations in the US.',
    image: '/resources/working_in_the_us_img.png',
    imageLabel: 'Employment Opportunities',
  },
  {
    title: 'Your Finances on an F1',
    date: 'Oct 11',
    description: 'Tips for managing your finances and understanding financial restrictions on an F1 visa.',
    image: '/resources/finances_on_f1_img.png',
    imageLabel: 'Financial Management',
  },
  {
    title: 'Keep your Visa in Check',
    date: 'Oct 11',
    description: 'Important information on maintaining your F1 visa status and avoiding common mistakes.',
    image: '/resources/student_visa_img.png',
    imageLabel: 'Visa Maintenance',
  },
  {
    title: 'Filing Taxes',
    date: 'May 2',
    description: 'Step-by-step guide on how to file taxes as an international student in the US.',
    image: '/resources/filing_taxes_img.png',
    imageLabel: 'Tax Filing',
  },
  {
    title: 'Insurance Options',
    date: 'Jan 22',
    description: 'Overview of health insurance options available for international students.',
    image: '/resources/health_insurance.png',
    imageLabel: 'Health Insurance',
  },
  {
    title: 'Minnesota Drivers License',
    date: 'Nov 5',
    description: 'Information on how to obtain a driver’s license in Minnesota as a non-resident.',
    image: '/resources/drivers_license.png',
    imageLabel: 'Driver’s License',
  },
  {
    title: 'Can I do Off-Campus Housing?',
    date: 'Apr 11',
    description: 'Yes you can, and here are options for off-campus housing.',
    image: '/resources/off_campus_housing.png',
    imageLabel: 'Off-Campus Housing',
  },
  {
    title: 'Transportation in the Fargo Moorhead Area',
    date: 'Feb 19',
    description: 'Guide to transportation options including buses, bike rentals, and car services in Fargo Moorhead.',
    image: 'resources/transportation.png',
    imageLabel: 'Local Transportation',
  },
];

const showMoreData: Record<string, LinkData[]> = {
  'Working in the US': [
    { title: 'USCIS Student and Employmet', url: 'https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment' },
    { title: 'Yale University Employment for F1', url: 'https://oiss.yale.edu/employment-taxes/employment-for-international-students/employment-for-f-1-students' },
    { title: 'Concordia: Working in the US', url: 'https://www.concordiacollege.edu/directories/offices-departments-directory/international-community/working-in-the-us/' },
  ],
  'Your Finances on an F1': [
    { title: 'Sprintax Money Managment for International Students', url: 'https://blog.sprintax.com/an-international-students-guide-to-managing-finances/' },
    { title: 'Bank of America: Banking as an International Student', url: 'https://about.bankofamerica.com/en/international-student-bank-account'},
    { title: 'Investopedia: Credit Score Explained', url: 'https://www.investopedia.com/terms/c/credit_score.asp'},
    { title: 'Chime Secured Credit Builder', url: 'https://www.chime.com/apply-credit/?ad=nwcb&value_prop=cb-dd&subid1=9208a9eec0594b5b8428c8beadf943f5'},
    { title: 'IRS FICA Taxes Exemption During Emplyment', url: 'https://www.irs.gov/individuals/international-taxpayers/foreign-student-liability-for-social-security-and-medicare-taxes' },
    { title: 'Financial Planning on F1 Visa', url: 'https://www.snowballwealth.com/blog/navigating-financial-planning-for-international-students-on-f1-visas'}
  ],
  'Keep your Visa in Check': [
    { title: 'Concorida College Visa and Passports', url: 'https://www.concordiacollege.edu/directories/offices-departments-directory/international-community/visas-and-passports/' },
    { title: 'Yale University: Maintaining F-1 and J-1 Visas', url: 'https://oiss.yale.edu/maintaining-status-for-students' },
  ],
  'Filing Taxes': [
    { title: 'Sprintax Guide', url: 'https://blog.sprintax.com/f1-visa-tax-return-guide-international-students/' },
    { title: 'IRS Taxes for Nonresident Aliens', url: 'https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens' },
    { title: 'Yale University: U.S. Taxes', url: 'https://oiss.yale.edu/employment-taxes/us-taxes' },
    { title: 'Minnesota Income Tax for Nonresidents', url: 'https://www.revenue.state.mn.us/nonresidents' },
    { title: 'Concordia: International Taxes', url: 'https://www.concordiacollege.edu/directories/offices-departments-directory/international-community/taxes/'},
  ],
  'Insurance Options': [
    { title: 'Concordia College Healthcare', url: 'https://www.concordiacollege.edu/directories/offices-departments-directory/international-community/healthcare/' },
    { title: 'Minnesota Human Services: Healthcare', url: 'https://mn.gov/dhs/people-we-serve/adults/health-care/health-care-programs/programs-and-services/noncitizens.jsp' },
  ],
  'Minnesota Drivers License': [
    { title: 'Minnesota DVS', url: 'https://dps.mn.gov/divisions/dvs/Pages/dvs-content-detail.aspx?pageID=551' },
    { title: 'Concordia ID and DL', url: 'https://www.concordiacollege.edu/directories/offices-departments-directory/international-community/id-and-drivers-license/#:~:text=If%20you%20have%20never%20had,and%20skill%20(road)%20test.' },
    { title: 'Minnesota Drivers Manual', url: 'https://dps.mn.gov/divisions/dvs/forms-documents/Documents/Minnesota_Drivers_Manual.pdf' },
  ],
  'Can I do Off-Campus Housing?': [
    { title: 'Apartments around Concordia', url: 'https://www.apartments.com/off-campus-housing/mn/moorhead/concordia-college/' },
    { title: 'Concordia Town Houses', url: 'https://www.concordiacollege.edu/student-life/residence-life/residence-halls/townhouses/' },
    { title: 'Zillow Apartmernts', url: 'https://www.zillow.com/concordia-college-moorhead-mn/apartments/' },
  ],
  'Transportation in the Fargo Moorhead Area': [
    { title: 'City of Moorhead Transportation', url: 'https://www.ci.moorhead.mn.us/business/starting-expanding-or-relocating-your-business/transportation' },
    { title: 'Concordia: Getting to Campus', url: 'https://www.concordiacollege.edu/about/getting-to-campus/' },
    { title: 'MATBUS Routes', url: 'https://matbus.com/routes'},
  ],
};

const posts = [post1];

const sidebar = {
  title: 'About',
  description:
    'We are Concordia International. We aim to enhance the academic success and sense of belonging for international students in Concordia College by creating a comprehensive support system through this website archive and ultimately foster an inclusive and empowering environment.',
  archives: [
    { title: 'No Archives Yet', url: '#' },
  ],
  social: [
    { name: 'Instagram', icon: Instagram, link: 'https://www.instagram.com/cord_iso/' },
    { name: 'Facebook', icon: FacebookIcon, link: 'https://www.facebook.com/cordintl/' },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Concordia International" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} showMoreData={showMoreData[post.title] || []}/>
            ))}
          </Grid>
          <Grid container spacing={3} sx={{ mt: 3, mb: -8 }}>
            <Main title="Recent News for International Students" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Concordia International"
        description="Proudly built by a Philips Scholar @ Jaleta Tesgera"
      />
    </ThemeProvider>
  );
}
