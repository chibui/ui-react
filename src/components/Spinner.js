import styled from "styled-components";

const SpinnerComponent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid grey;
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
`

export const Spinner = () => {
  return (
		<SpinnerComponent></SpinnerComponent>
	);
}