import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 5px;
  padding: 10px;
  box-shadow: 2px 2px rgba(0,0,0, 0.40);
  background-color: rgba(0,0,0,0.02);
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const Tipo = styled.View`
  flex-direction: row;
`;

export const IconView = styled.View`
  flex-direction:row;
  background-color: ${props => props.tipo === 'despesa' ? '#C62c36' : '#049301'};
  padding: 2px 8px;
  border-radius: 5px;
  width: 100%;
  height: 35px;
  align-items: center;
  justify-content: center;
`;

export const TipoText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-style: italic;
`;

export const ValorText = styled.Text`
  color: #222;
  padding-top: 5px;
  text-align: center;
  font-size:22px;
  font-weight: bold;
`;

