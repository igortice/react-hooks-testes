/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContentLoader from 'react-content-loader';
import { getReposGitHub } from '../store/actions/exemploAction';

export default () => {
  const myGitHub = useSelector(state => state.exemplo.cinco);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReposGitHub('igortice'));
  }, [dispatch]);

  const MyProjectsGitHub = () => {
    if (myGitHub.projetos.length === 0) {
      return (
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox='0 0 400 160'
          backgroundColor='#f3f3f3'
          foregroundColor='#000000'
        >
          <circle cx='10' cy='20' r='8' />
          <rect x='25' y='15' rx='5' ry='5' width='220' height='10' />
          <circle cx='10' cy='50' r='8' />
          <rect x='25' y='45' rx='5' ry='5' width='220' height='10' />
          <circle cx='10' cy='80' r='8' />
          <rect x='25' y='75' rx='5' ry='5' width='220' height='10' />
          <circle cx='10' cy='110' r='8' />
          <rect x='25' y='105' rx='5' ry='5' width='220' height='10' />
        </ContentLoader>
      );
    } else {
      return (
        <ol>
          {myGitHub.projetos.map(ele => (
            <li key={ele.id}>{ele.nome}</li>
          ))}
        </ol>
      );
    }
  };

  return (
    <div>
      <MyProjectsGitHub />
    </div>
  );
};
