import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <>
      <Layout>
      <h1>About Me</h1>

      <p>Hello, I'm Victor Jordan, front-end developer since 2015</p>
      <p>Need a developer? <Link to="/contact">Contact me!</Link></p>

      </Layout>
    </>
  )
}

export default AboutPage;