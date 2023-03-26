import React from 'react';

import CompanyCard from '@/components/CompanyCard/CompanyCard';
import companies from '@/models/companies';

const WorkExperience = () => (
  <section>
    {companies.map((company) => (
      <CompanyCard key={company.title} company={company} />
    ))}
  </section>
);

export default WorkExperience;
