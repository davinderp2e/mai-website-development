'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Blog1 from '../../../../public/images/blog-1.png';
import Blog2 from 'public/images/blog-2.png';
import Blog3 from 'public/images/blog-3.png';
import CaseStudy1 from 'public/images/case-study-1.png';
import CaseStudy2 from 'public/images/case-study-2.png';
import CaseStudy3 from 'public/images/case-study-3.png';
import { Arrow } from '../../../_assets/svg';
import './articles-section.scss';

const blogs = [
  {
    id: 1,
    image: Blog1,
    date: 'May 2023',
    description: 'Adventures of the fantastic trio',
  },
  {
    id: 2,
    image: Blog2,
    date: 'November 2023',
    description: 'Kalptantra and its commitment to a sustainable world',
  },
  {
    id: 3,
    image: Blog3,
    date: 'November 2023',
    description: 'Protect your artwork with smart asset tokenization',
  }
];

const whitePapers = [
  {
    id: 1,
    date: 'August 2023',
    keyword: 'SMART',
    title: 'Shared Market of Assets and Real Asset Tokens',
    description: 'A Kalptantra-powered Solution for Tokenizing Physical Assets with Decentralized Governance...',
  },
  {
    id: 2,
    date: 'August 2023',
    keyword: 'MyIPR',
    title: 'Empowering creators globally',
    description: 'MyIPR seeks to revolutionize the intellectual property (IP) protection landscape by leveraging the power...',
  },
  {
    id: 3,
    date: 'August 2023',
    keyword: 'Mai Labs',
    title: 'We empower you to empower yourself',
    description: 'Mayaa-verse expressly disclaims all responsibility for any direct or consequential loss or damage of',
  },
];

const caseStudies = [
  {
    id: 1,
    image: CaseStudy1,
    title: 'Harassment in the age of meta-societies',
  },
  {
    id: 2,
    image: CaseStudy2,
    title: 'Identity Fraud/Theft in the Virtual World',
  },
  {
    id: 3,
    image: CaseStudy3,
    title: 'Verse without a Verdict',
  }
];

const types = [
  {
    id: 1,
    name: 'Blogs',
  },
  {
    id: 2,
    name: 'White Papers',
  },
  {
    id: 3,
    name: 'Case Studies',
  },
];

const ArticlesSection = () => {
  const [selectedArticle, setSelectedArticle] = useState(3);

  let Arrow:any;

  const onClick = (id: number) => () => {
    setSelectedArticle(id);
  };

  return (
    <div className="articles-section">
      <div className="container">
        <div className="articles-section__header">
          <h2 className="articles-section__header--title">Latest Articles</h2>
          <div className="articles-section__header--article-types">
            {
              types.map((type) => (
                <div
                  key={type.id}
                  className={`type ${selectedArticle === type.id ? 'active' : ''}`}
                  onClick={onClick(type.id)}
                >
                  {type.name}
                </div>
              ))
            }
          </div>
        </div>
        <div className="articles-section__content">
          {
            selectedArticle === 1 && (
              <div className="blogs-wrapper">
                {
                  blogs.map((blog) => (
                    <div className="blog" key={blog.id}>
                      <div className="blog__image">
                        <Image src={blog.image} alt="blog" />
                      </div>
                      <div className="blog__content">
                        <div className="blog__date">{blog.date}</div>
                        <div className="blog__description">{blog.description}</div>
                      </div>
                    </div>
                  ))
                }
              </div>
            )
          }
          {
            selectedArticle === 2 && (
              <div className="white-paper-wrapper">
                {
                  whitePapers.map((whitePaper) => (
                    <div className="white-paper" key={whitePaper.id}>
                      <div className="white-paper__content">
                        <div className="white-paper__date">{whitePaper.date}</div>
                        <div className="white-paper__title">
                          <span>{whitePaper.keyword} - </span>{whitePaper.title}
                        </div>
                        <div className="white-paper__description">{whitePaper.description}</div>
                        <div className="white-paper__vector-arrow">
                          <Arrow width={24} fill="#6D1874" />
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            )
          }
          {
            selectedArticle === 3 && (
              <div className="case-study-wrapper">
                {
                  caseStudies.map((caseStudy) => (
                    <div className="case-study" key={caseStudy.id}>
                      <div className="case-study__content">
                        <div className="case-study__content--image">
                          <Image src={caseStudy.image} alt="" />
                        </div>
                        <div className="case-study__content--title">{caseStudy.title}</div>
                        <div className="case-study__vector-arrow">
                          <Arrow width={24} fill="#6D1874" />
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
        <div className="view-more">View More</div>
      </div>
    </div>
  )
};

export default ArticlesSection;
