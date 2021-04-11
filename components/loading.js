import { Circle } from "better-react-spinkit";
import styled from 'styled-components'
function loading() {
    return (
      <Center>
        <div>
        <Circle color="#15202b" size={60} />
        </div>
      </Center>
    );
}

export default loading

const Center = styled.div`
    display:grid;
    place-items:center;
    align-items:center;
    height:100vh;
`






// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import styled from "styled-components";

// function loading() {
//   return (
//     <Loader>
//       <CircularProgress color="secondary" />
//     </Loader>
//   );
// }

// export default loading;

// const Loader = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   &&& {
//     height: 100vh;
//     width: 100vw;
//   }
// `;
