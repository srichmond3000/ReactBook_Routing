import React from 'react';
import { Route } from 'react-router-dom';
import { MainMenu, AboutMenu } from './menus';

export const Home = () => (
  <PageTemplate>
    <section>
      <h1>Home</h1>
    </section>
  </PageTemplate>
);

export const About = () => (
  <PageTemplate>
    <section>
      <Route component={AboutMenu} />
      <Route exact path="/about" component={Company} />
      <Route path="/about/history" component={CompanyHistory} />
      <Route path="/about/services" component={Services} />
    </section>
  </PageTemplate>
);

export const Events = () => (
  <PageTemplate>
    <section>
      <h1>Events</h1>
    </section>
  </PageTemplate>
);

export const Products = () => (
  <PageTemplate>
    <section>
      <h1>Products</h1>
    </section>
  </PageTemplate>
);

export const Contact = () => (
  <PageTemplate>
    <section>
      <h1>Contact</h1>
    </section>
  </PageTemplate>
);

export const NotFound = () => (
  <PageTemplate>
    <section>
      <h1>404 not found</h1>
    </section>
  </PageTemplate>
);

export const Company = () => (
  <section>
    <h1>Company</h1>
    <p>Blurb about company</p>
  </section>
);

export const CompanyHistory = () => (
  <section>
    <h1>History</h1>
    <p>1066 and all that</p>
  </section>
);

export const Services = () => (
  <section>
    <h1>Services</h1>
    <p>Blurb about services provided.</p>
  </section>
);

export const PageTemplate = ({ children }) => (
  <div>
    <MainMenu />
    {children}
  </div>
);