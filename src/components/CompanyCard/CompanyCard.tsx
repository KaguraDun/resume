import cn from 'classnames';
import React from 'react';

import { ICompany } from '@/models/companies';

import s from './CompanyCard.scss';

interface ICompanyCardProps {
  company: ICompany;
}

const CompanyCard = ({ company }: ICompanyCardProps) => (
  <div className={s.company}>
    <div className={s.header}>
      <div className={s.title}>
        <h2 className="text-heading-h2">{company.title}</h2>
        <span>{company.period}</span>
      </div>

      <div className={cn(s.subtitle, 'text-subheading')}>
        {company.totalExperience}
      </div>
    </div>
    <div className={s.about}>{company.about}</div>
    <div >{company.experience}</div>
  </div>
);

export default CompanyCard;
