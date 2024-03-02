import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SearchLabel = styled.label`
  color: #474f7a;
  font-size: 18px;
  font-weight: 700;
`;

export const SearchInputBox = styled.input`
  padding: 10px;
  background-color: #474f7a;
  border: none;
  outline: none;
  color: #fefbf6;
  font-size: 16px;
  width: 50%;
  border-radius: 10px;
  box-shadow: 1px 1px 2px #474f7a;
`;
