import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  ListPersonalTemplatesQuery,
  ListPersonalTemplatesQueryVariables,
} from 'app/graphql/types';
import { LIST_PERSONAL_TEMPLATES } from 'app/components/CreateNewSandbox/queries';
import { Loader } from '../../Loader/index';
import { TemplateList, ITemplateInfo } from '../../TemplateList';
import { CenteredMessage } from '../elements';
import { FilteredTemplates } from './FilteredTemplates';

interface IPersonalTemplatesProps {
  filter: string;
}

export const PersonalTemplates = ({ filter }: IPersonalTemplatesProps) => {
  const { data, error, loading } = useQuery<
    ListPersonalTemplatesQuery,
    ListPersonalTemplatesQueryVariables
  >(LIST_PERSONAL_TEMPLATES, {
    variables: {},
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <CenteredMessage>
        Something went wrong while fetching your templates, please try again in
        a minute.
      </CenteredMessage>
    );
  }

  const allTemplateInfos: ITemplateInfo[] = [
    {
      title: 'Recently Used Templates',
      key: 'recently-used-templates',
      templates: data.me.recentlyUsedTemplates,
    },
    {
      title: 'My Templates',
      key: 'my-templates',
      templates: data.me.templates,
    },
    ...data.me.teams
      .filter(t => t.templates.length > 0)
      .map(team => ({
        key: `${team.id}-templates`,
        title: `${team.name}${team.name.endsWith('s') ? "'" : "'s"} Templates`,
        templates: team.templates,
      })),

    {
      title: 'My Bookmarked Templates',
      key: 'my-bookmarked-templates',
      templates: data.me.bookmarkedTemplates,
    },
    ...data.me.teams
      .filter(t => t.templates.length > 0)
      .map(team => ({
        key: `${team.id}-bookmarked-templates`,
        title: `${team.name}${
          team.name.endsWith('s') ? "'" : "'s"
        } Bookmarked Templates`,
        templates: team.bookmarkedTemplates,
      })),
  ];

  return filter ? (
    <FilteredTemplates query={filter} templateInfos={allTemplateInfos} />
  ) : (
    <TemplateList templateInfos={allTemplateInfos} />
  );
};
