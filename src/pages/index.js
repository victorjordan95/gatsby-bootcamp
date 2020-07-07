import React from 'react';
import { Link } from 'gatsby'

import Layout from '../components/layout';

const indexPage = () => {

  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Victor, a front-end developer, living in São Jose</h2>
      <p>Need a developer? <Link to="/contact">Contact me!</Link></p>
    </Layout>
  )
}

export default indexPage;