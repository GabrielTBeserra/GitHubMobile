import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  background-color: #121212;
  color: #fff;
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  background-color: #2e2e2e;
  width: 100%;
  padding: 15px;
`;

export const Name = styled.Text`
  color: white;
  font-size: 35px;
  margin-top: 15px;
`;

export const Bio = styled.Text`
  color: white;
  font-size: 15px;
  margin-top: 2px;
  width: 100%;
  text-align: center;
`;

export const Image = styled.Image`
  margin-top: 15px;
  width: 150px;
  height: 150px;
  border-radius: 500px;
`;

export const ReposTitle = styled.Text`
  color: white;
  font-size: 20px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 35px;
`;

export const Repo = styled.Button`
  color: green;
  align-items: flex-start;
  background-color: green;
  padding: 5px;
  width: 100%;
`;

export const Scroll = styled.ScrollView`
  width: 100%;
`;
