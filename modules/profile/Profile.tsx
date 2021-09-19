import React, { FC, useEffect, useState } from 'react';
import { Alert, Linking } from 'react-native';

import { GetRepos, GetUser } from '../../src/services/gitHubApi';
import GitHubRepo from '../../src/types/github_repo';
import GitHubUser from '../../src/types/github_user';

import * as ProfileStyle from './style';

const Profile: FC = () => {
  const [profile, setProfile] = useState<GitHubUser>();
  const [repos, setRepos] = useState<Array<GitHubRepo>>();

  const LoadUserFromGitHub = async () => {
    const response = await GetUser('GabrielTBeserra');
    const repost = await GetRepos('GabrielTBeserra');
    setRepos(repost);
    setProfile(response);
  };

  const handlePress = async (link: string) => {
    await Linking.openURL(link);
  };

  useEffect(() => {
    LoadUserFromGitHub();
  }, []);

  return (
    <ProfileStyle.Container>
      <ProfileStyle.Header>
        <ProfileStyle.Image source={{ uri: profile?.avatar_url }} />
        <ProfileStyle.Name>{profile?.name}</ProfileStyle.Name>
        <ProfileStyle.Bio>{profile?.bio}</ProfileStyle.Bio>
      </ProfileStyle.Header>
      <ProfileStyle.ReposTitle>Repos</ProfileStyle.ReposTitle>
      <ProfileStyle.Scroll>
        {repos?.map(repo => {
          return (
            <ProfileStyle.Repo
              key={repo.id}
              color="#121212"
              title={repo.name}
              onPress={() => handlePress(repo.html_url)}
            />
          );
        })}
      </ProfileStyle.Scroll>
    </ProfileStyle.Container>
  );
};

export default Profile;
